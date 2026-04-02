import { render } from 'vitest-browser-svelte';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import TwitterCard from '$lib/components/TwitterCard.svelte';

const origin = vi.hoisted(() => 'https://example.com');

vi.mock('$app/state', () => ({
  page: {
    url: new URL(origin)
  }
}));

describe('TwitterCard.svelte', () => {
  it('renders Twitter meta tags', async () => {
    await render(TwitterCard);

    const twitterCard = page.getByTestId('twitter-card');
    const twitterTitle = page.getByTestId('twitter-title');
    const twitterDescription = page.getByTestId('twitter-description');
    const twitterImageAlt = page.getByTestId('twitter-image-alt');
    const twitterImage = page.getByTestId('twitter-image');

    await expect.element(twitterCard).toHaveAttribute('content');
    await expect.element(twitterTitle).toHaveAttribute('content');
    await expect.element(twitterDescription).toHaveAttribute('content');
    await expect.element(twitterImageAlt).toHaveAttribute('content');
    await expect.element(twitterImage).toHaveAttribute('content', `${origin}/images/pqb-logo.png`);
  });
});
