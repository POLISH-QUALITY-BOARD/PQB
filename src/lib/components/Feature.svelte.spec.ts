import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import { createRawSnippet } from 'svelte';
import { page } from 'vitest/browser';
import { faker } from '@faker-js/faker';
import Feature from '$lib/components/Feature.svelte';
import IconStar from '~icons/mdi/star';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Feature.svelte', () => {
  it('renders with icon, title and description', async () => {
    const title = faker.lorem.words(2);
    const description = faker.lorem.sentence();

    await render(Feature, {
      icon: IconStar,
      title: snippet(`<span>${title}</span>`),
      children: snippet(`<span>${description}</span>`)
    });

    await expect.element(page.getByTestId('feature-icon')).toBeVisible();
    await expect.element(page.getByTestId('feature-title')).toHaveTextContent(title);
    await expect.element(page.getByTestId('feature-description')).toHaveTextContent(description);
  });
});
