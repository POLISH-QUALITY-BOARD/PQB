import { describe, it, expect, vi } from 'vitest';
import { get } from 'svelte/store';
import {
  cookieConsentGranted,
  cookieConsentDenied,
  grantCookieConsent,
  denyCookieConsent,
  resetCookieConsent
} from '$lib/stores/cookieConsent';

vi.mock('$app/environment', () => ({ browser: true }));

vi.hoisted(() => {
  Object.assign(globalThis, {
    window: globalThis,
    gtag: vi.fn(),
    localStorage: {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn()
    }
  });
});

describe('cookieConsent', () => {
  it('does not sync on server', async () => {
    vi.resetModules().doMock('$app/environment', () => ({ browser: false }));

    const { cookieConsentGranted } = await import('$lib/stores/cookieConsent');

    expect(get(cookieConsentGranted)).toBe(false);
    expect(localStorage.getItem).not.toHaveBeenCalled();
  });

  it('grants consent and syncs with localStorage and gtag', () => {
    grantCookieConsent();

    expect(get(cookieConsentGranted)).toBe(true);
    expect(get(cookieConsentDenied)).toBe(false);

    expect(localStorage.setItem).toHaveBeenCalledWith('cookie-consent', 'granted');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', { analytics_storage: 'granted' });
  });

  it('denies consent and syncs with localStorage and gtag', () => {
    denyCookieConsent();

    expect(get(cookieConsentGranted)).toBe(false);
    expect(get(cookieConsentDenied)).toBe(true);

    expect(localStorage.setItem).toHaveBeenCalledWith('cookie-consent', 'denied');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', { analytics_storage: 'denied' });
  });

  it('resets consent and syncs with localStorage and gtag', () => {
    grantCookieConsent();
    resetCookieConsent();

    expect(get(cookieConsentGranted)).toBe(false);
    expect(get(cookieConsentDenied)).toBe(false);

    expect(localStorage.removeItem).toHaveBeenCalledWith('cookie-consent');
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', { analytics_storage: 'denied' });
  });
});
