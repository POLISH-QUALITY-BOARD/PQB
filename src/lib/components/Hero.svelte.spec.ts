import Hero from '$lib/components/Hero.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Hero.svelte', () => {
  it('renders', async () => {
    await render(Hero);

    await expect.element(page.getByTestId('hero')).toBeInTheDocument();
  });
});
