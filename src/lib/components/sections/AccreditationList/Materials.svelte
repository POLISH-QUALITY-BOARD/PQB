<script lang="ts">
  import Article from '$lib/components/Article.svelte';
  import type { AccreditationListMaterials } from '$velite';
  import IconArrowDown from '~icons/mdi/arrow-down';
  import IconArrowUp from '~icons/mdi/arrow-up';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconFilterOffOutline from '~icons/mdi/filter-off-outline';
  import IconOpenInNew from '~icons/mdi/open-in-new';
  import IconUnfoldMoreHorizontal from '~icons/mdi/unfold-more-horizontal';
  import IconLinkedin from '~icons/simple-icons/linkedin';

  let {
    heading: title,
    emptyMessage,
    openLabel,
    body,
    items
  }: AccreditationListMaterials = $props();

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  type SortKey = 'default' | 'name' | 'author' | 'dateTo';
  let sort = $state<{ key: SortKey; dir: 'asc' | 'desc' }>({ key: 'default', dir: 'asc' });

  const setSort = (key: SortKey) => {
    if (sort.key === key && key !== 'default') {
      sort = { key, dir: sort.dir === 'asc' ? 'desc' : 'asc' };
    } else {
      sort = { key, dir: 'asc' };
    }
  };

  const sorted = $derived.by(() => {
    if (sort.key === 'default') return items;
    return [...items].sort((a, b) => {
      let cmp = 0;
      if (sort.key === 'name') cmp = a.name.localeCompare(b.name);
      if (sort.key === 'author') cmp = a.author.localeCompare(b.author);
      if (sort.key === 'dateTo') cmp = a.dateTo.localeCompare(b.dateTo);
      return sort.dir === 'asc' ? cmp : -cmp;
    });
  });

  const ariaSort = (key: SortKey): 'ascending' | 'descending' | 'none' => {
    if (sort.key !== key) return 'none';
    return sort.dir === 'asc' ? 'ascending' : 'descending';
  };
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<Article level={2}>
  {#snippet heading()}{title}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-600 mb-6">{@html body}</div>

  <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <caption class="sr-only">{title}</caption>
        <thead>
          <tr class="bg-gray-50 border-b border-gray-200">
            <th scope="col" class="text-left px-6 py-3" aria-sort={ariaSort('name')}>
              <button
                type="button"
                onclick={() => setSort('name')}
                class="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sort.key ===
                'name'
                  ? 'text-primary'
                  : 'text-primary'}"
              >
                Nazwa
                {#if sort.key === 'name'}
                  {#if sort.dir === 'asc'}<IconArrowUp
                      aria-hidden="true"
                      width="12"
                      height="12"
                    />{:else}<IconArrowDown aria-hidden="true" width="12" height="12" />{/if}
                {:else}
                  <IconUnfoldMoreHorizontal aria-hidden="true" width="12" height="12" />
                {/if}
              </button>
            </th>
            <th scope="col" class="text-left px-4 py-3" aria-sort={ariaSort('author')}>
              <button
                type="button"
                onclick={() => setSort('author')}
                class="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sort.key ===
                'author'
                  ? 'text-primary'
                  : 'text-primary'}"
              >
                Autor
                {#if sort.key === 'author'}
                  {#if sort.dir === 'asc'}<IconArrowUp
                      aria-hidden="true"
                      width="12"
                      height="12"
                    />{:else}<IconArrowDown aria-hidden="true" width="12" height="12" />{/if}
                {:else}
                  <IconUnfoldMoreHorizontal aria-hidden="true" width="12" height="12" />
                {/if}
              </button>
            </th>
            <th scope="col" class="px-4 py-3 w-32" aria-sort={ariaSort('dateTo')}>
              <div class="flex justify-center">
                <button
                  type="button"
                  onclick={() => setSort('dateTo')}
                  class="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sort.key ===
                  'dateTo'
                    ? 'text-primary'
                    : 'text-primary'}"
                >
                  Data do
                  {#if sort.key === 'dateTo'}
                    {#if sort.dir === 'asc'}<IconArrowUp
                        aria-hidden="true"
                        width="12"
                        height="12"
                      />{:else}<IconArrowDown aria-hidden="true" width="12" height="12" />{/if}
                  {:else}
                    <IconUnfoldMoreHorizontal aria-hidden="true" width="12" height="12" />
                  {/if}
                </button>
              </div>
            </th>
            <th scope="col" class="w-28 py-3 px-6 text-right" aria-sort="none">
              <button
                type="button"
                onclick={() => setSort('default')}
                class="text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sort.key ===
                'default'
                  ? 'text-primary'
                  : 'text-primary'}"
              >
                Reset
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {#each sorted as { name, author, authorLinkedin, dateTo, link }, i (i)}
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
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-primary no-underline hover:underline whitespace-nowrap"
                    >{name}</a
                  >
                </div>
              </td>
              <td class="px-4 py-3.5">
                <div class="flex items-center gap-1.5">
                  <span class="font-medium text-gray-700 whitespace-nowrap">{author}</span>
                  {#if authorLinkedin}
                    <a
                      href={authorLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Profil LinkedIn — {author}"
                      class="text-gray-300 hover:text-primary no-underline"
                    >
                      <IconLinkedin aria-hidden="true" width="12" height="12" />
                    </a>
                  {/if}
                </div>
              </td>
              <td class="px-4 py-3.5 text-center">
                <span
                  class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-primary-light text-primary"
                  >{formatDate(dateTo)}</span
                >
              </td>
              <td class="px-6 py-3.5 text-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-xs font-semibold pl-2.5 pr-3.5 py-1.5 rounded-lg no-underline text-white bg-primary hover:bg-primary-dark"
                  aria-label="Otwórz link dla {name}"
                >
                  <IconOpenInNew aria-hidden="true" width="13" height="13" />
                  {openLabel}
                </a>
              </td>
            </tr>
          {/each}
          {#if items.length === 0}
            <tr>
              <td colspan="4" class="px-6 py-4 text-center">
                <div class="inline-flex items-center gap-2 text-sm text-gray-600">
                  <IconFilterOffOutline
                    aria-hidden="true"
                    width="18"
                    height="18"
                    class="shrink-0"
                  />
                  {emptyMessage}
                </div>
              </td>
            </tr>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</Article>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
