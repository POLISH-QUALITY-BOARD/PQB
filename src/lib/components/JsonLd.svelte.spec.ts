import JsonLd from '$lib/components/JsonLd.svelte';
import { faker } from '@faker-js/faker';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

const origin = vi.hoisted(() => 'https://example.com');

vi.mock('$app/state', () => ({
  page: {
    url: new URL(origin)
  }
}));

describe('JsonLd.svelte', () => {
  it('renders JSON-LD script', async () => {
    const type = 'NGO';
    const memberOf = faker.company.name();
    const name = faker.company.name();
    const sameAs = [faker.internet.url()];
    const contactPoints = [
      {
        '@type': 'ContactPoint',
        email: faker.internet.email(),
        contactType: 'customer support',
        availableLanguage: ['English']
      }
    ];

    await render(JsonLd, {
      props: {
        '@type': type,
        memberOf,
        name,
        sameAs,
        contactPoint: contactPoints
      }
    });

    const { textContent } = page.getByTestId('json-ld').element();

    const data = JSON.parse(textContent!);

    expect(data).toHaveProperty('@context', 'https://schema.org');
    expect(data).toHaveProperty('@type', type);
    expect(data).toHaveProperty('name', name);
    expect(data).toHaveProperty('sameAs', sameAs);
    expect(data).toHaveProperty('contactPoint', contactPoints);
    expect(data).toHaveProperty('url', `${origin}/`);
    expect(data).toHaveProperty('logo', `${origin}/images/pqb-logo.png`);
  });
});
