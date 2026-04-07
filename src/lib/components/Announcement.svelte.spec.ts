import Announcement from '$lib/components/Announcement.svelte';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Announcement.svelte', () => {
  it('renders', async () => {
    await render(Announcement);

    await expect.element(page.getByTestId('announcement')).toBeInTheDocument();
  });
});
