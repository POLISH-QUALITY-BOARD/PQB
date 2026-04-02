import { render } from 'vitest-browser-svelte';
import { describe, expect, it, beforeEach } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import Navbar from '$lib/components/Navbar.svelte';

const GALAXY_S9_WIDTH = 360;
const GALAXY_S9_HEIGHT = 740;

describe('Navbar.svelte', () => {
  beforeEach(async () => {
    await page.viewport(GALAXY_S9_WIDTH, GALAXY_S9_HEIGHT);

    await render(Navbar);

    await expect.element(page.getByTestId('navbar')).toBeInTheDocument();
  });

  it('opens after clicking hamburger button', async () => {
    const hamburgerButton = page.getByTestId('navbar-hamburger-button');
    const mobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await hamburgerButton.click();

    await expect.element(mobileNavigation).toBeInTheDocument();
  });

  it('closes clicking hamburger button', async () => {
    const hamburgerButton = page.getByTestId('navbar-hamburger-button');
    const mobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await hamburgerButton.click();
    await hamburgerButton.click();

    await expect.element(mobileNavigation).not.toBeInTheDocument();
  });

  it('closes after clicking outside', async () => {
    const hamburgerButton = page.getByTestId('navbar-hamburger-button');
    const mobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await hamburgerButton.click();

    await expect.element(mobileNavigation).toBeInTheDocument();

    await userEvent.click(document.body);

    await expect.element(mobileNavigation).not.toBeInTheDocument();
  });

  it('closes after pressing escape', async () => {
    const hamburgerButton = page.getByTestId('navbar-hamburger-button');
    const mobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await hamburgerButton.click();

    await expect.element(mobileNavigation).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    await expect.element(mobileNavigation).not.toBeInTheDocument();
  });
});
