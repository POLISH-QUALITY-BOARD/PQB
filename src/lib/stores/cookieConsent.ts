import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'cookie-consent';

const GRANTED = 'granted';
const DENIED = 'denied';

type ConsentValue = typeof GRANTED | typeof DENIED | null;

const initial: ConsentValue = browser ? (localStorage.getItem(STORAGE_KEY) as ConsentValue) : null;

const cookieConsentStore = writable<ConsentValue>(initial);

cookieConsentStore.subscribe((value) => {
  if (!browser) return;

  if (value === null) {
    localStorage.removeItem(STORAGE_KEY);
    window.gtag?.('consent', 'update', { analytics_storage: DENIED });
  } else if (value === GRANTED || value === DENIED) {
    localStorage.setItem(STORAGE_KEY, value);
    window.gtag?.('consent', 'update', { analytics_storage: value });
  }
});

export const cookieConsentGranted = derived(cookieConsentStore, (value) => value === GRANTED);
export const cookieConsentDenied = derived(cookieConsentStore, (value) => value === DENIED);

export const grantCookieConsent = () => cookieConsentStore.set(GRANTED);
export const denyCookieConsent = () => cookieConsentStore.set(DENIED);
export const resetCookieConsent = () => cookieConsentStore.set(null);
