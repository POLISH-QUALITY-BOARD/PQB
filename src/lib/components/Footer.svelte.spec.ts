import Footer from '$lib/components/Footer.svelte';
import { resetCookieConsent } from '$lib/stores/cookieConsent';
import { faker } from '@faker-js/faker';
import { createRawSnippet } from 'svelte';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

vi.hoisted(() => {
  Object.assign(globalThis, { gtag: vi.fn() });
});

vi.mock('$lib/stores/cookieConsent', () => ({
  resetCookieConsent: vi.fn()
}));

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Footer.svelte', () => {
  beforeEach(async () => {
    await render(Footer, {
      props: {
        brand: {
          alt: faker.lorem.words()
        },
        navigation: {
          label: 'Navigation',
          links: [
            {
              href: faker.internet.url(),
              text: faker.lorem.word()
            }
          ]
        },
        documents: {
          label: 'Documents',
          links: [
            {
              href: faker.internet.url(),
              text: faker.lorem.word()
            }
          ]
        },
        contact: {
          label: 'Kontakt',
          email: {
            label: 'E-mail',
            address: faker.internet.email()
          },
          office: {
            label: 'Office',
            address: faker.location.streetAddress()
          }
        },
        social: {
          linkedin: {
            ariaLabel: 'LinkedIn',
            href: faker.internet.url()
          },
          facebook: {
            ariaLabel: 'Facebook',
            href: faker.internet.url()
          },
          github: {
            ariaLabel: 'GitHub',
            href: faker.internet.url()
          },
          discord: {
            ariaLabel: 'Discord',
            href: faker.internet.url()
          }
        },
        copyright: faker.lorem.sentence(),
        additionalItems: [faker.lorem.word()],
        privacyPolicy: {
          href: faker.internet.url(),
          text: 'Polityka prywatności'
        },
        cookieSettings: {
          text: 'Ustawienia cookies'
        },
        children: snippet(`<p>${faker.lorem.sentence()}</p>`)
      }
    });

    await expect.element(page.getByTestId('footer')).toBeInTheDocument();
  });

  it('resets consent after clicking cookie settings button', async () => {
    await page.getByTestId('footer-cookie-settings-button').click();

    expect(resetCookieConsent).toHaveBeenCalledOnce();
  });
});
