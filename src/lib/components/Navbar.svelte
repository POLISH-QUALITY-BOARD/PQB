<script lang="ts">
  import { base, resolve } from '$app/paths';
  import { NavigationMenu } from 'bits-ui';
  import { slide } from 'svelte/transition';
  import IconAccountPlusOutline from '~icons/mdi/account-plus-outline';
  import IconChevronDown from '~icons/mdi/chevron-down';
  import type { Navbar } from '$velite';

  let { brand, navbarItems, joinUsButton }: Navbar = $props();

  let menuOpen = $state(false);
  let openGroup = $state<string | null>(null);

  let header: HTMLElement;

  const handleToggle = () => (menuOpen = !menuOpen);
  const handleClose = () => (menuOpen = false);

  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (!header?.contains(target as Node)) {
      handleClose();
    }
  };

  const handleKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      handleClose();
    }
  };
</script>

{#snippet joinUsButtonContent(text: string)}
  <IconAccountPlusOutline aria-hidden="true" width="16" height="16" />
  {text}
{/snippet}

<svelte:window onclick={handleOutsideClick} onkeydown={handleKeydown} />
<svelte:body class:overflow-hidden={menuOpen} />

<header
  class="sticky top-0 z-100 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
  data-testid="navbar"
  bind:this={header}
>
  <div class="max-w-270 mx-auto flex justify-between items-center px-6 h-17.5">
    <a
      href={resolve('/')}
      aria-label={brand.ariaLabel}
      class="flex items-center gap-3 no-underline shrink-0"
      data-testid="navbar-brand-link"
    >
      <enhanced:img src="$lib/assets/brand.webp" alt="PQB Logo" class="h-12 w-auto" />
    </a>

    <NavigationMenu.Root
      aria-label="Nawigacja główna"
      class="hidden md:flex"
      data-testid="navbar-desktop-navigation"
    >
      <NavigationMenu.List class="flex flex-row gap-1 items-center list-none m-0 p-0">
        {#each navbarItems as { text, ...item }, index (index)}
          {#if 'children' in item}
            <NavigationMenu.Item class="relative">
              <NavigationMenu.Trigger>
                {#snippet child({ props })}
                  <!-- eslint-disable svelte/no-navigation-without-resolve -->
                  <a
                    href={base + item.href}
                    {...props}
                    data-testid="navbar-desktop-dropdown-navigation-item"
                    class="group flex items-center gap-1.5 text-gray-600 font-medium px-4 py-2.5 hover:text-primary no-underline cursor-pointer text-base"
                  >
                    {text}
                    <IconChevronDown
                      aria-hidden="true"
                      class="w-4 h-4 opacity-40 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </a>
                  <!-- eslint-enable svelte/no-navigation-without-resolve -->
                {/snippet}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                class="absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl py-2 min-w-64 z-1000 border border-gray-100"
              >
                <ul class="list-none m-0 p-0">
                  {#each item.children as { href, text }, index (index)}
                    <li>
                      <!-- eslint-disable svelte/no-navigation-without-resolve -->
                      <a
                        href={base + href}
                        data-testid="navbar-desktop-child-navigation-item"
                        class="block px-5 py-3 text-gray-600 text-sm no-underline hover:text-primary hover:bg-gray-50"
                        >{text}</a
                      >
                      <!-- eslint-enable svelte/no-navigation-without-resolve -->
                    </li>
                  {/each}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          {:else}
            <NavigationMenu.Item>
              <!-- eslint-disable svelte/no-navigation-without-resolve -->
              <NavigationMenu.Link
                href={base + item.href}
                data-testid="navbar-desktop-navigation-item"
                class="block text-gray-600 font-medium px-4 py-3 no-underline hover:text-primary"
                >{text}</NavigationMenu.Link
              >
              <!-- eslint-enable svelte/no-navigation-without-resolve -->
            </NavigationMenu.Item>
          {/if}
        {/each}
        <NavigationMenu.Item class="pl-4">
          <!-- eslint-disable svelte/no-navigation-without-resolve -->
          <NavigationMenu.Link
            href={base + joinUsButton.href}
            data-testid="navbar-desktop-join-us-button"
            class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark pl-3.5 pr-5 py-2 rounded-lg no-underline"
          >
            {@render joinUsButtonContent(joinUsButton.text)}
          </NavigationMenu.Link>
          <!-- eslint-enable svelte/no-navigation-without-resolve -->
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>

    <button
      type="button"
      class="flex md:hidden flex-col bg-transparent border-none cursor-pointer gap-1.5 p-2"
      aria-label={menuOpen ? 'Zamknij nawigację' : 'Otwórz nawigację'}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onclick={handleToggle}
      data-testid="navbar-hamburger-button"
    >
      {#each ['rotate-45 translate-y-2', 'opacity-0', '-rotate-45 -translate-y-2'] as openClass, index (index)}
        <span
          aria-hidden="true"
          class="block w-6 h-0.5 bg-primary rounded-sm transition-all duration-200 ease-in-out {menuOpen
            ? openClass
            : ''}"
        ></span>
      {/each}
    </button>
  </div>

  {#if menuOpen}
    <div
      id="mobile-navigation"
      data-testid="navbar-mobile-navigation"
      class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-100"
      transition:slide={{ duration: 200 }}
    >
      <nav aria-label="Nawigacja główna" class="max-w-270 mx-auto px-4 py-2 flex flex-col">
        {#each navbarItems as { text, ...item }, index (index)}
          {#if 'children' in item}
            <div>
              <button
                type="button"
                class="flex items-center justify-between w-full px-3 py-3 text-gray-600 text-sm font-medium bg-transparent border-none cursor-pointer hover:text-primary"
                aria-expanded={openGroup === text}
                onclick={() => (openGroup = openGroup === text ? null : text)}
                data-testid="navbar-mobile-dropdown-navigation-item"
              >
                {text}
                <IconChevronDown
                  aria-hidden="true"
                  class={`w-4 h-4 opacity-40 transition-transform duration-200 ${openGroup === text ? 'rotate-180' : ''}`}
                />
              </button>
              {#if openGroup === text}
                <div class="flex flex-col pl-4 pb-2" transition:slide={{ duration: 200 }}>
                  {#each item.children as { href, text }, index (index)}
                    <!-- eslint-disable svelte/no-navigation-without-resolve -->
                    <a
                      href={base + href}
                      data-testid="navbar-mobile-child-navigation-item"
                      class="text-gray-600 text-sm py-2.5 no-underline hover:text-primary"
                      onclick={handleClose}>{text}</a
                    >
                    <!-- eslint-enable svelte/no-navigation-without-resolve -->
                  {/each}
                </div>
              {/if}
            </div>
          {:else}
            <div class="h-px bg-gray-100"></div>
            <!-- eslint-disable svelte/no-navigation-without-resolve -->
            <a
              href={base + item.href}
              data-testid="navbar-mobile-navigation-item"
              class="text-gray-600 text-sm font-medium px-3 py-3 no-underline hover:text-primary"
              onclick={handleClose}>{text}</a
            >
            <!-- eslint-enable svelte/no-navigation-without-resolve -->
          {/if}
        {/each}
        <div class="px-3 py-3 pt-2">
          <!-- eslint-disable svelte/no-navigation-without-resolve -->
          <a
            href={base + joinUsButton.href}
            data-testid="navbar-mobile-join-us-button"
            class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark pl-3.5 pr-5 py-3 rounded-lg no-underline w-full"
            onclick={handleClose}
          >
            {@render joinUsButtonContent(joinUsButton.text)}
          </a>
          <!-- eslint-enable svelte/no-navigation-without-resolve -->
        </div>
      </nav>
    </div>
  {/if}
</header>

{#if menuOpen}
  <div
    class="fixed inset-0 top-17.5 bg-black/40 z-90 md:hidden"
    onclick={handleClose}
    aria-hidden="true"
  ></div>
{/if}
