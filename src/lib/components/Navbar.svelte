<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Component } from 'svelte';
  import { NavigationMenu } from 'bits-ui';
  import { slide } from 'svelte/transition';
  import IconAccountPlusOutline from '~icons/mdi/account-plus-outline';
  import IconChevronDown from '~icons/mdi/chevron-down';

  const navbarItems = [
    {
      href: '/#onas',
      text: 'O nas',
      children: [
        { href: '/#sklad-osobowy', text: 'Skład osobowy zarządu' },
        { href: '/#statut', text: 'Statut' },
        { href: '/#wizja-misja', text: 'Wizja, Misja' }
      ]
    },
    { href: '/#portfolio', text: 'Portfolio ISTQB®' },
    { href: '/#sylabusy', text: 'Sylabusy' },
    { href: '/#dolacz', text: 'Dołącz do nas', cta: { icon: IconAccountPlusOutline } }
  ] as const;

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

{#snippet ctaContent(Icon: Component, text: string)}
  <Icon aria-hidden="true" width="16" height="16" />
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
      aria-label="Strona główna PQB"
      class="flex items-center gap-3 no-underline shrink-0"
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
                  <a
                    href={resolve(item.href)}
                    {...props}
                    data-testid="navbar-desktop-navigation-item"
                    class="group flex items-center gap-1.5 text-gray-600 font-medium px-4 py-2.5 hover:text-primary no-underline cursor-pointer text-base"
                  >
                    {text}
                    <IconChevronDown
                      aria-hidden="true"
                      class="w-4 h-4 opacity-40 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </a>
                {/snippet}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                class="absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl py-2 min-w-64 z-1000 border border-gray-100"
              >
                <ul class="list-none m-0 p-0">
                  {#each item.children as { href, text }, index (index)}
                    <li>
                      <a
                        href={resolve(href)}
                        data-testid="navbar-desktop-navigation-item"
                        class="block px-5 py-3 text-gray-600 text-sm no-underline hover:text-primary hover:bg-gray-50"
                        >{text}</a
                      >
                    </li>
                  {/each}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          {:else if 'cta' in item}
            <NavigationMenu.Item class="pl-4">
              <NavigationMenu.Link
                href={resolve(item.href)}
                data-testid="navbar-desktop-navigation-item"
                class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark pl-3.5 pr-5 py-2 rounded-lg no-underline"
              >
                {@render ctaContent(item.cta.icon, text)}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          {:else}
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href={resolve(item.href)}
                data-testid="navbar-desktop-navigation-item"
                class="block text-gray-600 font-medium px-4 py-3 no-underline hover:text-primary"
                >{text}</NavigationMenu.Link
              >
            </NavigationMenu.Item>
          {/if}
        {/each}
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
                    <a
                      href={resolve(href)}
                      data-testid="navbar-mobile-navigation-item"
                      class="text-gray-600 text-sm py-2.5 no-underline hover:text-primary"
                      onclick={handleClose}>{text}</a
                    >
                  {/each}
                </div>
              {/if}
            </div>
          {:else if 'cta' in item}
            <div class="px-3 py-3 pt-2">
              <a
                href={resolve(item.href)}
                data-testid="navbar-mobile-navigation-item"
                class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark pl-3.5 pr-5 py-3 rounded-lg no-underline w-full"
                onclick={handleClose}
              >
                {@render ctaContent(item.cta.icon, text)}
              </a>
            </div>
          {:else}
            <div class="h-px bg-gray-100"></div>
            <a
              href={resolve(item.href)}
              data-testid="navbar-mobile-navigation-item"
              class="text-gray-600 text-sm font-medium px-3 py-3 no-underline hover:text-primary"
              onclick={handleClose}>{text}</a
            >
          {/if}
        {/each}
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
