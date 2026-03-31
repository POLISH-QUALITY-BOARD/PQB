import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import Announcement from '$lib/components/Announcement.svelte';

describe('Announcement.svelte', () => {
  it('renders', async () => {
    await render(Announcement);

    await expect.element(page.getByTestId('announcement')).toBeInTheDocument();
  });
});
