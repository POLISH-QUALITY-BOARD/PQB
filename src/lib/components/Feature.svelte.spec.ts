import Feature from '$lib/components/Feature.svelte';
import { faker } from '@faker-js/faker';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import IconStar from '~icons/mdi/star';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Feature.svelte', () => {
  it('renders with icon, heading and description', async () => {
    const heading = faker.lorem.words(2);
    const description = faker.lorem.sentence();

    await render(Feature, {
      icon: IconStar,
      heading: snippet(`<span>${heading}</span>`),
      children: snippet(`<span>${description}</span>`)
    });

    await expect.element(page.getByTestId('feature-icon')).toBeVisible();
    await expect.element(page.getByTestId('feature-heading')).toHaveTextContent(heading);
    await expect.element(page.getByTestId('feature-description')).toHaveTextContent(description);
  });
});
