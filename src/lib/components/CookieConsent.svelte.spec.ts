import { render } from 'vitest-browser-svelte';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { page } from 'vitest/browser';
import CookieConsent from '$lib/components/CookieConsent.svelte';
import { grantCookieConsent, denyCookieConsent } from '$lib/stores/cookieConsent';

vi.mock('$lib/stores/cookieConsent', () => ({
  cookieConsentGranted: { subscribe: (fn: (v: boolean) => void) => (fn(false), () => {}) },
  cookieConsentDenied: { subscribe: (fn: (v: boolean) => void) => (fn(false), () => {}) },
  grantCookieConsent: vi.fn(),
  denyCookieConsent: vi.fn()
}));

describe('CookieConsent.svelte', () => {
  beforeEach(async () => {
    await render(CookieConsent);
  });

  test('clicking accept calls grantCookieConsent', async () => {
    await page.getByTestId('cookie-consent-accept-button').click();

    expect(grantCookieConsent).toHaveBeenCalled();
  });

  test('clicking deny calls denyCookieConsent', async () => {
    await page.getByTestId('cookie-consent-deny-button').click();

    expect(denyCookieConsent).toHaveBeenCalled();
  });
});
