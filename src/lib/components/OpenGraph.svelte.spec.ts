import { render } from 'vitest-browser-svelte';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import OpenGraph from '$lib/components/OpenGraph.svelte';

const origin = vi.hoisted(() => 'https://example.com');

vi.mock('$app/state', () => ({
  page: {
    url: new URL(origin)
  }
}));

const width = '1200';
const height = '630';

describe('OpenGraph.svelte', () => {
  it('renders OpenGraph meta tags', async () => {
    await render(OpenGraph, { props: { image: { width, height } } });

    const ogType = page.getByTestId('og-type');
    const ogTitle = page.getByTestId('og-title');
    const ogDescription = page.getByTestId('og-description');
    const ogSiteName = page.getByTestId('og-site-name');
    const ogLocale = page.getByTestId('og-locale');
    const ogUrl = page.getByTestId('og-url');
    const ogImage = page.getByTestId('og-image');
    const ogImageWidth = page.getByTestId('og-image-width');
    const ogImageHeight = page.getByTestId('og-image-height');
    const ogImageAlt = page.getByTestId('og-image-alt');

    await expect.element(ogType).toHaveAttribute('content');
    await expect.element(ogTitle).toHaveAttribute('content');
    await expect.element(ogDescription).toHaveAttribute('content');
    await expect.element(ogSiteName).toHaveAttribute('content');
    await expect.element(ogLocale).toHaveAttribute('content');
    await expect.element(ogUrl).toHaveAttribute('content', `${origin}/`);
    await expect.element(ogImage).toHaveAttribute('content', `${origin}/images/pqb-logo.png`);
    await expect.element(ogImageWidth).toHaveAttribute('content', width);
    await expect.element(ogImageHeight).toHaveAttribute('content', height);
    await expect.element(ogImageAlt).toHaveAttribute('content');
  });
});
