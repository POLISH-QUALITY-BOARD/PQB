import CookieConsent from '$lib/components/CookieConsent.svelte';
import {
  cookieConsentDenied,
  cookieConsentGranted,
  resetCookieConsent
} from '$lib/stores/cookieConsent';
import { faker } from '@faker-js/faker';
import { createRawSnippet } from 'svelte';
import { get } from 'svelte/store';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

vi.hoisted(() => {
  Object.assign(globalThis, { gtag: vi.fn() });
});

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('CookieConsent.svelte', () => {
  beforeEach(async () => {
    resetCookieConsent();

    await render(CookieConsent, {
      props: {
        ariaLabel: faker.lorem.words(),
        children: snippet(`<span>${faker.lorem.paragraph()}</span>`),
        acceptButton: { text: faker.lorem.word(), ariaLabel: faker.lorem.words() },
        denyButton: { text: faker.lorem.word(), ariaLabel: faker.lorem.words() }
      }
    });

    await expect.element(page.getByTestId('cookie-consent')).toBeInTheDocument();
  });

  it('grants consent and hides dialog after clicking accept button', async () => {
    await page.getByTestId('cookie-consent-accept-button').click();

    expect(get(cookieConsentGranted)).toBe(true);

    await expect.element(page.getByTestId('cookie-consent')).not.toBeInTheDocument();
  });

  it('denies consent and hides dialog after clicking deny button', async () => {
    await page.getByTestId('cookie-consent-deny-button').click();

    expect(get(cookieConsentDenied)).toBe(true);

    await expect.element(page.getByTestId('cookie-consent')).not.toBeInTheDocument();
  });
});
