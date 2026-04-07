import { render } from 'vitest-browser-svelte';
import { describe, expect, it, beforeEach } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import Navbar from '$lib/components/Navbar.svelte';
import { faker } from '@faker-js/faker';

const GALAXY_S9_WIDTH = 360;
const GALAXY_S9_HEIGHT = 740;

describe('Navbar.svelte', () => {
  beforeEach(async () => {
    await page.viewport(GALAXY_S9_WIDTH, GALAXY_S9_HEIGHT);

    await render(Navbar, {
      props: {
        brand: {
          ariaLabel: faker.lorem.words()
        },
        navbarItems: [
          {
            href: faker.internet.url(),
            text: faker.lorem.word(),
            children: [
              {
                href: faker.internet.url(),
                text: faker.lorem.word()
              }
            ]
          }
        ],
        joinUsButton: {
          href: faker.internet.url(),
          text: faker.lorem.word()
        }
      }
    });

    await expect.element(page.getByTestId('navbar')).toBeInTheDocument();
  });

  it('opens after clicking hamburger button', async () => {
    const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');
    const navbarMobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await navbarHamburgerButton.click();

    await expect.element(navbarMobileNavigation).toBeInTheDocument();
  });

  it('closes clicking hamburger button', async () => {
    const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');
    const navbarMobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await navbarHamburgerButton.click();
    await navbarHamburgerButton.click();

    await expect.element(navbarMobileNavigation).not.toBeInTheDocument();
  });

  it('closes after clicking outside', async () => {
    const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');
    const navbarMobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await navbarHamburgerButton.click();

    await expect.element(navbarMobileNavigation).toBeInTheDocument();

    await userEvent.click(document.body);

    await expect.element(navbarMobileNavigation).not.toBeInTheDocument();
  });

  it('closes after pressing escape', async () => {
    const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');
    const navbarMobileNavigation = page.getByTestId('navbar-mobile-navigation');

    await navbarHamburgerButton.click();

    await expect.element(navbarMobileNavigation).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    await expect.element(navbarMobileNavigation).not.toBeInTheDocument();
  });

  it('opens children after clicking dropdown navigation item', async () => {
    const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');
    const navbarMobileDropdownNavigationItem = page.getByTestId(
      'navbar-mobile-dropdown-navigation-item'
    );
    const navbarMobileChildNavigationItem = page.getByTestId('navbar-mobile-child-navigation-item');

    await navbarHamburgerButton.click();
    await navbarMobileDropdownNavigationItem.click();

    await expect.element(navbarMobileChildNavigationItem).toBeInTheDocument();
  });
});
