import TwitterCard from '$lib/components/TwitterCard.svelte';
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

describe('TwitterCard.svelte', () => {
  it('renders', async () => {
    const card = 'summary_large_image';
    const title = faker.book.title();
    const description = faker.lorem.paragraph();
    const image = {
      src: `/${faker.lorem.word()}.png`,
      alt: faker.lorem.sentence()
    };

    await render(TwitterCard, {
      props: {
        card,
        title,
        description,
        image
      }
    });

    const twitterCard = page.getByTestId('twitter-card');
    const twitterTitle = page.getByTestId('twitter-title');
    const twitterDescription = page.getByTestId('twitter-description');
    const twitterImageAlt = page.getByTestId('twitter-image-alt');
    const twitterImage = page.getByTestId('twitter-image');

    await expect.element(twitterCard).toHaveAttribute('content', card);
    await expect.element(twitterTitle).toHaveAttribute('content', title);
    await expect.element(twitterDescription).toHaveAttribute('content', description);
    await expect.element(twitterImageAlt).toHaveAttribute('content', image.alt);
    await expect.element(twitterImage).toHaveAttribute('content', origin + image.src);
  });
});
