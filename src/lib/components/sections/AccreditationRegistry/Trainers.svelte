<script lang="ts">
  import Article from '$lib/components/Article.svelte';
  import type { AccreditationRegistryTrainers } from '$velite';
  import { Tooltip } from 'bits-ui';
  import { SvelteSet } from 'svelte/reactivity';
  import type { Picture } from 'vite-imagetools';
  import IconAccount from '~icons/mdi/account';
  import IconFilterOffOutline from '~icons/mdi/filter-off-outline';
  import IconShieldCheck from '~icons/mdi/shield-check';
  import IconShieldOff from '~icons/mdi/shield-off';
  import IconLinkedin from '~icons/simple-icons/linkedin';

  const assets = import.meta.glob<{ default: Picture }>('/src/lib/assets/**/*', {
    eager: true,
    query: '?enhanced'
  });

  let {
    heading: title,
    emptyMessage,
    activeLabel,
    expiredLabel,
    body,
    filters,
    items
  }: AccreditationRegistryTrainers = $props();

  const isActive = (dateTo: string) => Date.now() <= new Date(dateTo).getTime();

  const certText = $derived(Object.fromEntries(filters.map(({ code, text }) => [code, text])));
  const certTooltip = $derived(
    Object.fromEntries(filters.map(({ code, tooltip }) => [code, tooltip]))
  );

  let certFilter = new SvelteSet<string>();

  const filteredSorted = $derived(
    [...items]
      .filter(
        ({ certifications: certs }) =>
          certFilter.size === 0 || [...certFilter].some((c) => certs.includes(c))
      )
      .sort((a, b) => {
        const aCerts = isActive(a.dateTo) ? a.certifications.length : 0;
        const bCerts = isActive(b.dateTo) ? b.certifications.length : 0;
        if (bCerts !== aCerts) return bCerts - aCerts;
        return a.name.localeCompare(b.name);
      })
  );
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<Tooltip.Provider delayDuration={200}>
  <Article level={2} class="mb-16">
    {#snippet heading()}{title}{/snippet}

    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <div class="text-gray-600 mb-6">{@html body}</div>

    <div
      class="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:w-fit"
    >
      <div class="flex items-center gap-2 w-full">
        <span
          class="text-[10px] font-bold uppercase tracking-wider text-gray-600 shrink-0 flex items-center gap-1"
        >
          <IconShieldCheck aria-hidden="true" width="12" height="12" />
          Poziom:
        </span>
        <div class="flex items-center gap-1.5 flex-wrap ml-auto">
          {#each filters as { code, text }, i (i)}
            {@const active = certFilter.has(code)}
            <button
              type="button"
              aria-pressed={active}
              onclick={() => {
                if (certFilter.has(code)) certFilter.delete(code);
                else certFilter.add(code);
              }}
              class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border transition-colors cursor-pointer {active
                ? 'bg-primary text-white border-primary'
                : 'bg-primary-light text-primary border-transparent hover:border-primary/30'}"
            >
              {text}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3">
      {#each filteredSorted as { name, photo, dateTo, dateToLabel, certifications: certs, linkedin }, i (i)}
        {#if i > 0 && i % 3 === 0}
          <div class="hidden sm:block col-span-3 h-px bg-gray-100"></div>
        {/if}
        {@const active = isActive(dateTo)}
        <div
          class="flex items-center gap-4 p-4 bg-white border-b border-gray-100 last:border-b-0 sm:border-b-0"
        >
          {#if photo && assets[photo]}
            <div class="w-16 h-16 rounded-full overflow-hidden shrink-0">
              <enhanced:img
                src={assets[photo].default}
                alt={name}
                loading="lazy"
                class="w-full h-full object-cover object-top"
              />
            </div>
          {:else}
            <span
              class="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <IconAccount width="40" height="40" />
            </span>
          {/if}
          <div class="min-w-0 grow">
            <p class="font-semibold text-primary text-base mb-0 leading-snug">{name}</p>
            <p class="text-xs text-gray-500 mb-0 mt-0.5">
              {active ? activeLabel : expiredLabel}
              {dateToLabel}
            </p>
            <div class="flex items-center gap-1 flex-wrap mt-1.5">
              {#each certs as cert, ci (ci)}
                <Tooltip.Root>
                  <Tooltip.Trigger
                    class="p-0 m-0 bg-transparent border-none inline-flex items-center"
                  >
                    <span
                      class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide cursor-help {active
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-100 text-gray-400 border border-gray-200'}"
                    >
                      {#if active}
                        <IconShieldCheck aria-hidden="true" width="9" height="9" class="shrink-0" />
                      {:else}
                        <IconShieldOff aria-hidden="true" width="9" height="9" class="shrink-0" />
                      {/if}
                      {certText[cert] ?? cert}
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      class="z-50 max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg transition-opacity duration-150 data-[state=delayed-open]:opacity-100 data-[state=closed]:opacity-0"
                      sideOffset={6}
                    >
                      {certTooltip[cert] ?? cert}
                      <Tooltip.Arrow class="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              {/each}
            </div>
          </div>
          {#if linkedin}
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedin.ariaLabel}
              class="shrink-0 text-gray-300 hover:text-primary no-underline"
            >
              <IconLinkedin aria-hidden="true" width="18" height="18" />
            </a>
          {/if}
        </div>
      {/each}
    </div>

    {#if filteredSorted.length === 0}
      <div class="flex items-center gap-2 py-10">
        <IconFilterOffOutline
          aria-hidden="true"
          width="18"
          height="18"
          class="text-gray-600 shrink-0"
        />
        <p class="text-sm text-gray-600">{emptyMessage}</p>
      </div>
    {/if}
  </Article>
</Tooltip.Provider>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
