import { render } from 'vitest-browser-svelte';
import { describe, expect, test } from 'vitest';
import { createRawSnippet } from 'svelte';
import { page } from 'vitest/browser';
import { faker } from '@faker-js/faker';
import Section from '$lib/components/Section.svelte';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Section.svelte', () => {
  test('renders section with id, title and body', async () => {
    const id = faker.string.uuid();
    const title = faker.lorem.words(3);
    const content = faker.lorem.sentence();

    await render(Section, {
      id,
      title: snippet(`<span>${title}</span>`),
      children: snippet(`<p>${content}</p>`)
    });

    await expect.element(page.getByTestId('section')).toHaveAttribute('id', id);
    await expect.element(page.getByTestId('section-title')).toHaveTextContent(title);
    await expect.element(page.getByTestId('section-body')).toHaveTextContent(content);
  });
});
