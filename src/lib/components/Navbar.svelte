<script lang="ts">
  import { resolve } from '$app/paths';
  import brand from '$lib/assets/brand.webp';
  import { NavigationMenu } from 'bits-ui';
  import { slide } from 'svelte/transition';
  import IconAccountPlusOutline from '~icons/mdi/account-plus-outline';

  let menuOpen = $state(false);
  let oNasOpen = $state(false);
  let header: HTMLElement;

  $effect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });

  function handleOutsideClick(e: MouseEvent) {
    if (!header?.contains(e.target as Node)) menuOpen = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') menuOpen = false;
  }

  const linkClass = 'block text-gray-600 font-medium px-4 py-3 no-underline hover:text-primary';
  const dropdownLinkClass =
    'block px-5 py-3 text-gray-600 text-sm no-underline hover:text-primary hover:bg-gray-50';
</script>

<svelte:window onclick={handleOutsideClick} onkeydown={handleKeydown} />

<header
  class="sticky top-0 z-100 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
  bind:this={header}
>
  <div class="max-w-270 mx-auto flex justify-between items-center px-6 h-17.5">
    <a href={resolve('/')} class="flex items-center gap-3 no-underline shrink-0">
      <enhanced:img src={brand} alt="PQB Logo" class="h-12 w-auto" />
    </a>

    <!-- Desktop nav -->
    <NavigationMenu.Root class="hidden md:flex">
      <NavigationMenu.List class="flex flex-row gap-1 items-center list-none m-0 p-0">
        <NavigationMenu.Item class="relative">
          <NavigationMenu.Trigger
            class="flex items-center gap-1.5 text-gray-600 font-medium px-4 py-2.5 hover:text-primary bg-transparent border-none cursor-pointer text-base"
          >
            O nas
            <svg
              class="w-3 h-3 opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            class="absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl py-2 min-w-64 z-1000 border border-gray-100"
          >
            <ul class="list-none m-0 p-0">
              <li><a href="#sklad-osobowy" class={dropdownLinkClass}>Skład osobowy zarządu</a></li>
              <li><a href="#statut" class={dropdownLinkClass}>Statut</a></li>
              <li><a href="#wizja-misja" class={dropdownLinkClass}>Wizja, Misja</a></li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#portfolio" class={linkClass}
            >Portfolio ISTQB®</NavigationMenu.Link
          >
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#sylabusy" class={linkClass}>Sylabusy</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item class="pl-4">
          <NavigationMenu.Link
            href="#dolacz"
            class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark pl-3.5 pr-5 py-2 rounded-lg no-underline"
          >
            <IconAccountPlusOutline width="16" height="16" />
            Dołącz do nas
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>

    <!-- Mobile hamburger -->
    <button
      type="button"
      class="flex md:hidden flex-col bg-transparent border-none cursor-pointer gap-1.5 p-2"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span
        class={`block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-200 ease-in-out${menuOpen ? ' rotate-45 translate-y-2' : ''}`}
      ></span>
      <span
        class={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-200 ease-in-out${menuOpen ? ' opacity-0' : ''}`}
      ></span>
      <span
        class={`block w-6 h-0.5 bg-primary rounded-sm transition-transform duration-200 ease-in-out${menuOpen ? ' -rotate-45 -translate-y-2' : ''}`}
      ></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div
      class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-100"
      transition:slide={{ duration: 200 }}
    >
      <nav class="max-w-270 mx-auto px-4 py-2 flex flex-col">
        <div>
          <button
            type="button"
            class="flex items-center justify-between w-full px-3 py-3 text-gray-600 text-sm font-medium bg-transparent border-none cursor-pointer hover:text-primary"
            onclick={() => (oNasOpen = !oNasOpen)}
          >
            O nas
            <svg
              class={`w-3 h-3 opacity-40 transition-transform duration-200 ${oNasOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if oNasOpen}
            <div class="flex flex-col pl-4 pb-2" transition:slide={{ duration: 200 }}>
              <a
                href="#sklad-osobowy"
                class="text-gray-500 text-sm py-2.5 no-underline hover:text-primary"
                onclick={() => (menuOpen = false)}>Skład osobowy zarządu</a
              >
              <a
                href="#statut"
                class="text-gray-500 text-sm py-2.5 no-underline hover:text-primary"
                onclick={() => (menuOpen = false)}>Statut</a
              >
              <a
                href="#wizja-misja"
                class="text-gray-500 text-sm py-2.5 no-underline hover:text-primary"
                onclick={() => (menuOpen = false)}>Wizja, Misja</a
              >
            </div>
          {/if}
        </div>
        <div class="h-px bg-gray-100"></div>
        <a
          href="#portfolio"
          class="text-gray-600 text-sm font-medium px-3 py-3 no-underline hover:text-primary"
          onclick={() => (menuOpen = false)}>Portfolio ISTQB®</a
        >
        <div class="h-px bg-gray-100"></div>
        <a
          href="#sylabusy"
          class="text-gray-600 text-sm font-medium px-3 py-3 no-underline hover:text-primary"
          onclick={() => (menuOpen = false)}>Sylabusy</a
        >
        <div class="px-3 py-3 pt-2">
          <a
            href="#dolacz"
            class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark pl-3.5 pr-5 py-3 rounded-lg no-underline w-full"
            onclick={() => (menuOpen = false)}
          >
            <IconAccountPlusOutline width="16" height="16" />
            Dołącz do nas
          </a>
        </div>
      </nav>
    </div>
  {/if}
</header>

<!-- Page overlay when mobile menu is open -->
{#if menuOpen}
  <div
    class="fixed inset-0 top-17.5 bg-black/40 z-90 md:hidden"
    onclick={() => (menuOpen = false)}
    aria-hidden="true"
  ></div>
{/if}
