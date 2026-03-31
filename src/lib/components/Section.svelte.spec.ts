import { render } from 'vitest-browser-svelte';
import { describe, expect, test } from 'vitest';
import { createRawSnippet } from 'svelte';
import { page } from 'vitest/browser';
import { faker } from '@faker-js/faker';
import Section from '$lib/components/Section.svelte';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Section.svelte', () => {
  test('renders section with class, id, heading and body', async () => {
    const className = 'bg-white';
    const id = faker.string.uuid();
    const heading = faker.lorem.words(3);
    const content = faker.lorem.sentence();

    await render(Section, {
      class: className,
      id,
      heading: snippet(`<span>${heading}</span>`),
      children: snippet(`<p>${content}</p>`)
    });

    const expectSection = expect.element(page.getByTestId('section'));

    await expectSection.toHaveClass(className);
    await expectSection.toHaveAttribute('id', id);

    await expect.element(page.getByTestId('section-heading')).toHaveTextContent(heading);
    await expect.element(page.getByTestId('section-body')).toHaveTextContent(content);
  });
});
