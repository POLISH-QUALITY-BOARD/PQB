import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import Hero from '$lib/components/Hero.svelte';

describe('Hero.svelte', () => {
  it('renders', async () => {
    await render(Hero);

    await expect.element(page.getByTestId('hero')).toBeInTheDocument();
  });
});
