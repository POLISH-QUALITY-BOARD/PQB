<script lang="ts">
  import Article from '$lib/components/Article.svelte';
  import type { AccreditationList, AccreditationListProviders } from '$velite';
  import { Tooltip } from 'bits-ui';
  import { SvelteSet } from 'svelte/reactivity';
  import IconFilterOffOutline from '~icons/mdi/filter-off-outline';
  import IconOpenInNew from '~icons/mdi/open-in-new';
  import IconShieldCheck from '~icons/mdi/shield-check';
  import IconShieldOff from '~icons/mdi/shield-off';
  import IconAdidas from '~icons/simple-icons/adidas';
  import IconNike from '~icons/simple-icons/nike';

  let {
    heading: title,
    emptyMessage,
    activeLabel,
    expiredLabel,
    body,
    items,
    certifications,
    certLabels
  }: AccreditationListProviders & {
    certifications: AccreditationList['certifications'];
    certLabels: Record<string, string>;
  } = $props();

  const isActive = (dateTo: string) => Date.now() <= new Date(dateTo + 'T23:59:59').getTime();

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const allCerts = $derived(certifications.map((c) => c.code));

  let certFilter = new SvelteSet<string>();

  const filteredSorted = $derived(
    [...items]
      .filter(
        ({ certifications: certs }) =>
          certFilter.size === 0 || [...certFilter].every((c) => certs.includes(c))
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
          {#each allCerts as cert, i (i)}
            {@const locked = cert === 'CTFL'}
            {@const active = locked || certFilter.has(cert)}
            <button
              type="button"
              disabled={locked}
              aria-pressed={active}
              onclick={() => {
                if (certFilter.has(cert)) certFilter.delete(cert);
                else certFilter.add(cert);
              }}
              class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border transition-colors {active
                ? 'bg-primary text-white border-primary'
                : 'bg-primary-light text-primary border-transparent hover:border-primary/30'} {locked
                ? 'cursor-not-allowed'
                : 'cursor-pointer'}"
            >
              {cert}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3">
      {#each filteredSorted as { name, logo, dateTo, certifications: certs, link }, i (i)}
        {#if i > 0 && i % 3 === 0}
          <div class="hidden sm:block col-span-3 h-px bg-gray-100"></div>
        {/if}
        {@const active = isActive(dateTo)}
        <div
          class="flex items-center gap-4 p-4 bg-white border-b border-gray-100 last:border-b-0 sm:border-b-0"
        >
          <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
            {#if logo === 'adidas'}
              <IconAdidas aria-hidden="true" width="22" height="22" class="text-gray-700" />
            {:else}
              <IconNike aria-hidden="true" width="22" height="22" class="text-gray-700" />
            {/if}
          </div>
          <div class="min-w-0 grow">
            <p class="font-semibold text-primary text-base mb-0 leading-snug">{name}</p>
            <p class="text-xs text-gray-500 mb-0 mt-0.5">
              {active ? activeLabel : expiredLabel}
              {formatDate(dateTo)}
            </p>
            <div class="flex items-center gap-1 flex-wrap mt-1.5">
              {#each certs as cert, ci (ci)}
                <Tooltip.Root>
                  <Tooltip.Trigger
                    class="p-0 m-0 bg-transparent border-none inline-flex items-center"
                  >
                    <span
                      class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide cursor-default {active
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-100 text-gray-400 border border-gray-200'}"
                    >
                      {#if active}
                        <IconShieldCheck aria-hidden="true" width="9" height="9" class="shrink-0" />
                      {:else}
                        <IconShieldOff aria-hidden="true" width="9" height="9" class="shrink-0" />
                      {/if}
                      {cert}
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      class="z-50 max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg transition-opacity duration-150 data-[state=delayed-open]:opacity-100 data-[state=closed]:opacity-0"
                      sideOffset={6}
                    >
                      {certLabels[cert] ?? cert}
                      <Tooltip.Arrow class="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              {/each}
            </div>
          </div>
          {#if link}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Strona — {name}"
              class="shrink-0 text-gray-300 hover:text-primary no-underline"
            >
              <IconOpenInNew aria-hidden="true" width="16" height="16" />
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
