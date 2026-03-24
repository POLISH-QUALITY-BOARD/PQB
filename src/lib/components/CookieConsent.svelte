<script lang="ts">
  import { fade } from 'svelte/transition';
  import IconCookieOutline from '~icons/mdi/cookie-outline';
  import {
    grantCookieConsent,
    denyCookieConsent,
    cookieConsentGranted,
    cookieConsentDenied
  } from '$lib/stores/cookieConsent';
  import { onMount } from 'svelte';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted && !$cookieConsentGranted && !$cookieConsentDenied}
  <div
    transition:fade={{ duration: 200 }}
    role="dialog"
    tabindex="0"
    aria-modal="true"
    aria-labelledby="cookie-title"
    aria-describedby="cookie-desc"
    class="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-2xl"
  >
    <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <IconCookieOutline width="22" height="22" class="shrink-0" aria-hidden="true" />
        <p id="cookie-desc" class="text-sm leading-relaxed text-white/75">
          <span id="cookie-title" class="sr-only">Zgoda na pliki cookie</span>
          Ta strona korzysta z plików cookie Google Analytics w celu analizy ruchu i poprawy jakości usług.
          Możesz wyrazić zgodę lub odmówić ich użycia.
        </p>
      </div>
      <div class="flex gap-3 shrink-0 ml-8.5 sm:ml-0">
        <button
          onclick={grantCookieConsent}
          aria-label="Zaakceptuj pliki cookie"
          class="flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark cursor-pointer"
        >
          Akceptuj
        </button>
        <button
          onclick={denyCookieConsent}
          aria-label="Odrzuć pliki cookie"
          class="flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg text-white/80 hover:text-white cursor-pointer"
        >
          Odmów
        </button>
      </div>
    </div>
  </div>
{/if}
