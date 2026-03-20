<script>
  import IconNewspaperVariantOutline from '~icons/mdi/newspaper-variant-outline';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconOpenInNew from '~icons/mdi/open-in-new';
  import IconArrowUp from '~icons/mdi/arrow-up';
  import IconArrowDown from '~icons/mdi/arrow-down';
  import IconUnfoldMoreHorizontal from '~icons/mdi/unfold-more-horizontal';

  const whitepapers = [
    {
      title: 'Black-Box Testing for Practitioners: A Case of the New ISTQB Test Analyst Syllabus',
      href: 'https://ww2.ii.uj.edu.pl/~roman/icst25-preprint.pdf'
    }
  ];

  let wpSort = $state({ key: 'default', dir: 'asc' });

  function setWpSort(key) {
    if (wpSort.key === key && key !== 'default') {
      wpSort = { key, dir: wpSort.dir === 'asc' ? 'desc' : 'asc' };
    } else {
      wpSort = { key, dir: 'asc' };
    }
  }

  function sortedWhitepapers() {
    if (wpSort.key === 'default') return whitepapers;
    return [...whitepapers].sort((a, b) => {
      const cmp = a.title.localeCompare(b.title);
      return wpSort.dir === 'asc' ? cmp : -cmp;
    });
  }
</script>

<div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm md:col-span-2 mt-6">
  <div
    class="flex items-center gap-3 px-6 py-4"
    style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
  >
    <div class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
      <IconNewspaperVariantOutline width="16" height="16" color="white" />
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
                : 'text-gray-500'}"
            >
              Tytuł
              {#if wpSort.key === 'title'}
                {#if wpSort.dir === 'asc'}
                  <IconArrowUp width="12" height="12" />
                {:else}
                  <IconArrowDown width="12" height="12" />
                {/if}
              {:else}
                <IconUnfoldMoreHorizontal width="12" height="12" />
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
                : 'text-gray-500'}"
            >
              Reset
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {#each sortedWhitepapers() as paper, i (paper.href)}
          <tr
            class="border-b border-gray-100 last:border-b-0 {i % 2 !== 0
              ? 'bg-gray-50/50'
              : 'bg-white'}"
          >
            <td class="px-6 py-3.5">
              <div class="flex items-center gap-2.5">
                <IconFileDocumentOutline
                  width="15"
                  height="15"
                  class="text-accent shrink-0 opacity-70"
                />
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-primary hover:underline no-underline font-medium"
                  >{paper.title}</a
                >
              </div>
            </td>
            <td class="px-6 py-3.5 text-right">
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-dark pl-2.5 pr-3.5 py-1.5 rounded-lg no-underline"
              >
                <IconOpenInNew width="13" height="13" />
                Otwórz
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
