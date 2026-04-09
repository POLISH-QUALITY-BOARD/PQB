import type { Page } from '@playwright/test';

const NAVBAR_HAMBURGER_BUTTON_TEST_ID = 'navbar-hamburger-button';
const NAVBAR_DESKTOP_NAVIGATION_ITEM_TEST_ID = 'navbar-desktop-navigation-item';
const NAVBAR_MOBILE_NAVIGATION_ITEM_TEST_ID = 'navbar-mobile-navigation-item';
const NAVBAR_DESKTOP_JOIN_US_BUTTON_TEST_ID = 'navbar-desktop-join-us-button';
const NAVBAR_MOBILE_JOIN_US_BUTTON_TEST_ID = 'navbar-mobile-join-us-button';

const DOWNLOAD_LINK_SELECTOR = 'a[download]';

const MEMBERSHIP_DECLARATION_DOWNLOAD_BUTTON_TEST_ID = 'download-membership-declaration-button';

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
      navbarDesktopNavigationItem: this.navbarDesktopNavigationItem,
      navbarMobileNavigationItem: this.navbarMobileNavigationItem,
      navbarDesktopJoinUsButton: this.navbarDesktopJoinUsButton,
      navbarMobileJoinUsButton: this.navbarMobileJoinUsButton,
      downloadLink: this.downloadLink,
      membershipDeclarationDownloadButton: this.membershipDeclarationDownloadButton,
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

  clickNavbarDesktopNavigationItem(n = 0) {
    return this.navbarDesktopNavigationItem.nth(n).click();
  }

  clickNavbarMobileNavigationItem(n = 0) {
    return this.navbarMobileNavigationItem.nth(n).click();
  }

  clickDownloadLink(n = 0) {
    return this.downloadLink.nth(n).click();
  }

  clickMembershipDeclarationDownloadButton() {
    return this.membershipDeclarationDownloadButton.click();
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

  private get navbarDesktopNavigationItem() {
    return this.page.getByTestId(NAVBAR_DESKTOP_NAVIGATION_ITEM_TEST_ID);
  }

  private get navbarMobileNavigationItem() {
    return this.page.getByTestId(NAVBAR_MOBILE_NAVIGATION_ITEM_TEST_ID);
  }

  private get navbarDesktopJoinUsButton() {
    return this.page.getByTestId(NAVBAR_DESKTOP_JOIN_US_BUTTON_TEST_ID);
  }

  private get navbarMobileJoinUsButton() {
    return this.page.getByTestId(NAVBAR_MOBILE_JOIN_US_BUTTON_TEST_ID);
  }

  private get downloadLink() {
    return this.page.locator(DOWNLOAD_LINK_SELECTOR);
  }

  private get membershipDeclarationDownloadButton() {
    return this.page.getByTestId(MEMBERSHIP_DECLARATION_DOWNLOAD_BUTTON_TEST_ID);
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
