import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import Hero from '$lib/components/Hero.svelte';
import { createRawSnippet } from 'svelte';
import { faker } from '@faker-js/faker';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

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
        children: snippet(`<p>${faker.lorem.sentence()}</p>`)
      }
    });

    await expect.element(page.getByTestId('hero')).toBeInTheDocument();
  });
});
