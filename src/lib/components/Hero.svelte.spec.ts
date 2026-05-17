import Hero from '$lib/components/Hero.svelte';
import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Hero.svelte', () => {
  it('renders', async () => {
    await render(Hero, {
      props: {
        logo: {
          alt: faker.lorem.words()
        },
        learnMoreLink: {
          href: faker.internet.url(),
          text: faker.lorem.word()
        },
        body: `<p>${faker.lorem.sentence()}</p>`
      }
    });

    await expect.element(page.getByTestId('hero')).toBeInTheDocument();
  });
});
