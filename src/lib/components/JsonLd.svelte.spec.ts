import { render } from 'vitest-browser-svelte';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import JsonLd from '$lib/components/JsonLd.svelte';

const origin = vi.hoisted(() => 'https://example.com');

vi.mock('$app/state', () => ({
  page: {
    url: new URL(origin)
  }
}));

describe('JsonLd.svelte', () => {
  it('renders JSON-LD script', async () => {
    await render(JsonLd);

    const { textContent } = page.getByTestId('json-ld').element();

    const data = JSON.parse(textContent!);

    expect(data).toHaveProperty('@context');
    expect(data).toHaveProperty('@type');
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('sameAs');
    expect(data).toHaveProperty('contactPoint');
    expect(data).toHaveProperty('url', `${origin}/`);
    expect(data).toHaveProperty('logo', `${origin}/images/pqb-logo.png`);
  });
});
