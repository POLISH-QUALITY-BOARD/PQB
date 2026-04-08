import Section from '$lib/components/Section.svelte';
import { faker } from '@faker-js/faker';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Section.svelte', () => {
  it('renders section with class, id, heading and body', async () => {
    const className = 'bg-white';
    const id = faker.string.uuid();
    const heading = faker.lorem.words(3);
    const body = faker.lorem.sentence();

    await render(Section, {
      class: className,
      id,
      heading: snippet(`<span>${heading}</span>`),
      children: snippet(`<p>${body}</p>`)
    });

    const expectSection = expect.element(page.getByTestId('section'));

    await expectSection.toHaveClass(className);
    await expectSection.toHaveAttribute('id', id);

    await expect.element(page.getByTestId('section-heading')).toHaveTextContent(heading);
    await expect.element(page.getByTestId('section-body')).toHaveTextContent(body);
  });
});
