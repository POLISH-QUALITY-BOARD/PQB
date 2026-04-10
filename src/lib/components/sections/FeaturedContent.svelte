<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import type { FeaturedContent } from '$velite';
  import IconArrowDown from '~icons/mdi/arrow-down';
  import IconArrowUp from '~icons/mdi/arrow-up';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconNewspaperVariantOutline from '~icons/mdi/newspaper-variant-outline';
  import IconOpenInNew from '~icons/mdi/open-in-new';
  import IconUnfoldMoreHorizontal from '~icons/mdi/unfold-more-horizontal';

  let { heading: headingText, openButton, whitepapers, body }: FeaturedContent = $props();

  let wpSort = $state({ key: 'default', dir: 'asc' });

  function setWpSort(key) {
    if (wpSort.key === key && key !== 'default') {
      wpSort = { key, dir: wpSort.dir === 'asc' ? 'desc' : 'asc' };
    } else {
      wpSort = { key, dir: 'asc' };
    }
  }

  function sortedWhitepapers() {
    if (wpSort.key === 'default') return whitepapers.links;
    return [...whitepapers.links].sort((a, b) => {
      const cmp = a.title.localeCompare(b.title);
      return wpSort.dir === 'asc' ? cmp : -cmp;
    });
  }
</script>

<Section id="polecane" class="bg-white">
  {#snippet heading()}{headingText}{/snippet}

  <div class="text-gray-600 mb-10 space-y-4">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>

  <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm md:col-span-2 mt-6">
    <div
      class="flex items-center gap-3 px-6 py-4"
      style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
    >
      <div class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
        <IconNewspaperVariantOutline aria-hidden="true" width="16" height="16" color="white" />
      </div>
      <h3 class="text-sm font-semibold text-white mb-0">Polecane White papers</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th
              class="text-left px-6 py-3 w-auto"
              aria-sort={wpSort.key === 'title'
                ? wpSort.dir === 'asc'
                  ? 'ascending'
                  : 'descending'
                : 'none'}
            >
              <button
                type="button"
                onclick={() => setWpSort('title')}
                class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {wpSort.key ===
                'title'
                  ? 'text-primary'
                  : 'text-gray-600'}"
              >
                Tytuł
                {#if wpSort.key === 'title'}
                  {#if wpSort.dir === 'asc'}
                    <IconArrowUp aria-hidden="true" width="12" height="12" />
                  {:else}
                    <IconArrowDown aria-hidden="true" width="12" height="12" />
                  {/if}
                {:else}
                  <IconUnfoldMoreHorizontal aria-hidden="true" width="12" height="12" />
                {/if}
              </button>
            </th>
            <th class="w-32 py-3 px-6 text-right">
              <button
                type="button"
                onclick={() => setWpSort('default')}
                class="text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {wpSort.key ===
                'default'
                  ? 'text-primary'
                  : 'text-gray-600'}"
              >
                Reset
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {#each sortedWhitepapers() as { href, title }, i (i)}
            <tr
              class="border-b border-gray-100 last:border-b-0 {i % 2 !== 0
                ? 'bg-gray-50/50'
                : 'bg-white'}"
            >
              <td class="px-6 py-3.5">
                <div class="flex items-center gap-2.5">
                  <IconFileDocumentOutline
                    aria-hidden="true"
                    width="15"
                    height="15"
                    class="text-accent shrink-0 opacity-70"
                  />
                  <!-- eslint-disable svelte/no-navigation-without-resolve -->
                  <a
                    {href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-primary hover:underline no-underline font-medium">{title}</a
                  >
                  <!-- eslint-enable svelte/no-navigation-without-resolve -->
                </div>
              </td>
              <td class="px-6 py-3.5 text-right">
                <!-- eslint-disable svelte/no-navigation-without-resolve -->
                <a
                  {href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-dark pl-2.5 pr-3.5 py-1.5 rounded-lg no-underline"
                >
                  <IconOpenInNew aria-hidden="true" width="13" height="13" />
                  {openButton.text}
                </a>
                <!-- eslint-enable svelte/no-navigation-without-resolve -->
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</Section>
