import Footer from '$lib/components/Footer.svelte';
import { resetCookieConsent } from '$lib/stores/cookieConsent';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

vi.hoisted(() => {
  Object.assign(globalThis, { gtag: vi.fn() });
});

vi.mock('$lib/stores/cookieConsent', () => ({
  resetCookieConsent: vi.fn()
}));

describe('Footer.svelte', () => {
  it('renders', async () => {
    await render(Footer);

    await expect.element(page.getByTestId('footer')).toBeInTheDocument();
  });

  it('resets consent after clicking cookie settings button', async () => {
    await render(Footer);

    await page.getByTestId('footer-cookie-settings-button').click();

    expect(resetCookieConsent).toHaveBeenCalledOnce();
  });
});
