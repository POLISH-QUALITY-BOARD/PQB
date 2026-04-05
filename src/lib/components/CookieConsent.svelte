<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Snippet } from 'svelte';
  import IconCookieOutline from '~icons/mdi/cookie-outline';
  import {
    grantCookieConsent,
    denyCookieConsent,
    cookieConsentGranted,
    cookieConsentDenied
  } from '$lib/stores/cookieConsent';
  import { onMount } from 'svelte';

  let {
    ariaLabel,
    children,
    acceptButton,
    denyButton
  }: {
    ariaLabel: string;
    children: Snippet;
    acceptButton: { text: string; ariaLabel: string };
    denyButton: { text: string; ariaLabel: string };
  } = $props();

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted && !$cookieConsentGranted && !$cookieConsentDenied}
  <dialog
    open
    transition:fade={{ duration: 200 }}
    tabindex="0"
    aria-modal="true"
    aria-label={ariaLabel}
    aria-describedby="cookie-desc"
    class="fixed bottom-0 left-0 right-0 z-50 w-full bg-primary text-white shadow-2xl"
  >
    <div
      class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
      data-testid="cookie-consent"
    >
      <div class="flex items-center gap-3 flex-1">
        <IconCookieOutline width="22" height="22" class="shrink-0" aria-hidden="true" />
        <p id="cookie-desc" class="text-sm leading-relaxed text-white/75">
          {@render children()}
        </p>
      </div>
      <div class="flex gap-3 shrink-0 ml-8.5 sm:ml-0">
        <button
          onclick={grantCookieConsent}
          aria-label={acceptButton.ariaLabel}
          class="flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark cursor-pointer"
          data-testid="cookie-consent-accept-button"
        >
          {acceptButton.text}
        </button>
        <button
          onclick={denyCookieConsent}
          aria-label={denyButton.ariaLabel}
          class="flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg text-white/80 hover:text-white cursor-pointer"
          data-testid="cookie-consent-deny-button"
        >
          {denyButton.text}
        </button>
      </div>
    </div>
  </dialog>
{/if}
