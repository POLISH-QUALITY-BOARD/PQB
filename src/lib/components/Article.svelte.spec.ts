import Article from '$lib/components/Article.svelte';
import { faker } from '@faker-js/faker';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

const snippet = (html: string) => createRawSnippet(() => ({ render: () => html }));

describe('Article.svelte', () => {
  it('renders article with class, id, heading and body', async () => {
    const className = 'bg-white';
    const id = faker.string.uuid();
    const heading = faker.lorem.words(3);
    const body = faker.lorem.sentence();

    await render(Article, {
      class: className,
      id,
      heading: snippet(`<span>${heading}</span>`),
      children: snippet(`<p>${body}</p>`)
    });

    const expectArticle = expect.element(page.getByTestId('article'));

    await expectArticle.toHaveClass(className);
    await expectArticle.toHaveAttribute('id', id);

    await expect.element(page.getByTestId('article-heading')).toHaveTextContent(heading);
    await expect.element(page.getByTestId('article-subheading')).not.toBeInTheDocument();
    await expect.element(page.getByTestId('article-body')).toHaveTextContent(body);
  });

  it('renders article with heading, subheading and body', async () => {
    const heading = faker.lorem.words(2);
    const subheading = faker.lorem.sentence();
    const body = faker.lorem.sentence();

    await render(Article, {
      heading: snippet(`<span>${heading}</span>`),
      subheading: snippet(`<span>${subheading}</span>`),
      children: snippet(`<p>${body}</p>`)
    });

    const articleSubheadingExpect = expect.element(page.getByTestId('article-subheading'));

    await articleSubheadingExpect.toBeVisible();
    await articleSubheadingExpect.toHaveTextContent(subheading);
  });
});
