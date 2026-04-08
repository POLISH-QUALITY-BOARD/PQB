import type { Page } from '@playwright/test';

const NAVBAR_HAMBURGER_BUTTON_TEST_ID = 'navbar-hamburger-button';
const NAVBAR_DESKTOP_NAVIGATION_ITEM_TEST_ID = 'navbar-desktop-navigation-item';
const NAVBAR_MOBILE_NAVIGATION_ITEM_TEST_ID = 'navbar-mobile-navigation-item';

const DOWNLOAD_LINK_SELECTOR = 'a[download]';

const COOKIE_CONSENT_TEST_ID = 'cookie-consent';
const COOKIE_CONSENT_ACCEPT_BUTTON_TEST_ID = 'cookie-consent-accept-button';
const COOKIE_CONSENT_DENY_BUTTON_TEST_ID = 'cookie-consent-deny-button';

export class HomePage {
  constructor(private readonly page: Page) {}

  getPage() {
    return this.page;
  }

  getLocators() {
    return {
      navbarHamburgerButton: this.navbarHamburgerButton,
      navbarNavigationItem: this.navbarNavigationItem,
      downloadLink: this.downloadLink,
      cookieConsent: this.cookieConsent,
      cookieConsentAcceptButton: this.cookieConsentAcceptButton,
      cookieConsentDenyButton: this.cookieConsentDenyButton
    };
  }

  goto() {
    return this.page.goto('/');
  }

  clickNavbarHamburgerButton() {
    return this.navbarHamburgerButton.click();
  }

  clickNavbarNavigationItem(n = 0) {
    return this.navbarNavigationItem.nth(n).click();
  }

  clickDownloadLink(n = 0) {
    return this.downloadLink.nth(n).click();
  }

  clickCookieConsentAcceptButton() {
    return this.cookieConsentAcceptButton.click();
  }

  clickCookieConsentDenyButton() {
    return this.cookieConsentDenyButton.click();
  }

  private get navbarHamburgerButton() {
    return this.page.getByTestId(NAVBAR_HAMBURGER_BUTTON_TEST_ID);
  }

  private get navbarNavigationItem() {
    const navbarDesktopNavigationItem = this.page.getByTestId(
      NAVBAR_DESKTOP_NAVIGATION_ITEM_TEST_ID
    );
    const navbarMobileNavigationItem = this.page.getByTestId(NAVBAR_MOBILE_NAVIGATION_ITEM_TEST_ID);

    return navbarDesktopNavigationItem.or(navbarMobileNavigationItem);
  }

  private get downloadLink() {
    return this.page.locator(DOWNLOAD_LINK_SELECTOR);
  }

  private get cookieConsent() {
    return this.page.getByTestId(COOKIE_CONSENT_TEST_ID);
  }

  private get cookieConsentAcceptButton() {
    return this.page.getByTestId(COOKIE_CONSENT_ACCEPT_BUTTON_TEST_ID);
  }

  private get cookieConsentDenyButton() {
    return this.page.getByTestId(COOKIE_CONSENT_DENY_BUTTON_TEST_ID);
  }
}
