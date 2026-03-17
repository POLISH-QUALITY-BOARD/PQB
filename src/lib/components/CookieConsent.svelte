<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let visible = $state(false);
  let acceptBtn: HTMLButtonElement;
  let declineBtn: HTMLButtonElement;
  let previouslyFocused: HTMLElement | null = null;

  onMount(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      visible = true;
    } else if (consent === 'granted') {
      updateGAConsent('granted');
    }
  });

  $effect(() => {
    if (visible) {
      previouslyFocused = document.activeElement as HTMLElement;
      acceptBtn?.focus();
    }
  });

  function updateGAConsent(value: 'granted' | 'denied') {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: value
      });
    }
  }

  function close() {
    visible = false;
    previouslyFocused?.focus();
  }

  function accept() {
    localStorage.setItem('cookie-consent', 'granted');
    updateGAConsent('granted');
    close();
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'denied');
    close();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      decline();
      return;
    }

    if (e.key === 'Tab') {
      // Focus trap — tylko dwa przyciski
      if (e.shiftKey) {
        if (document.activeElement === acceptBtn) {
          e.preventDefault();
          declineBtn.focus();
        }
      } else {
        if (document.activeElement === declineBtn) {
          e.preventDefault();
          acceptBtn.focus();
        }
      }
    }
  }
</script>

{#if visible}
  <div
    transition:fade={{ duration: 300 }}
    role="dialog"
    tabindex="0"
    aria-modal="true"
    aria-labelledby="cookie-title"
    aria-describedby="cookie-desc"
    onkeydown={handleKeydown}
    class="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-2xl"
  >
    <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Icon
          icon="mdi:cookie-outline"
          width="22"
          height="22"
          class="shrink-0"
          aria-hidden="true"
        />
        <p id="cookie-desc" class="text-sm leading-relaxed text-white/75">
          <span id="cookie-title" class="sr-only">Zgoda na pliki cookie</span>
          Ta strona korzysta z plików cookie Google Analytics w celu analizy ruchu i poprawy jakości usług.
          Możesz wyrazić zgodę lub odmówić ich użycia.
        </p>
      </div>
      <div class="flex gap-3 shrink-0 ml-8.5 sm:ml-0">
        <button
          bind:this={acceptBtn}
          onclick={accept}
          aria-label="Zaakceptuj pliki cookie"
          class="flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg text-white bg-accent hover:bg-accent-dark transition-colors cursor-pointer"
        >
          Akceptuj
        </button>
        <button
          bind:this={declineBtn}
          onclick={decline}
          aria-label="Odmów plików cookie"
          class="flex-1 sm:flex-none px-5 py-2 text-sm font-medium rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          Odmów
        </button>
      </div>
    </div>
  </div>
{/if}
