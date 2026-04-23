import Announcement from '$lib/components/Announcement.svelte';
import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';

describe('Announcement.svelte', () => {
  it('renders', async () => {
    const text = faker.lorem.sentence();

    await render(Announcement, {
      props: { body: `<p>${text}</p>` }
    });

    await expect.element(page.getByTestId('announcement')).toHaveTextContent(text);
  });
});
