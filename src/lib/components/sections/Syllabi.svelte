<script lang="ts">
  import { base } from '$app/paths';
  import Section from '$lib/components/Section.svelte';
  import type { Syllabi } from '$velite';
  import { untrack } from 'svelte';
  import IconArrowDown from '~icons/mdi/arrow-down';
  import IconArrowUp from '~icons/mdi/arrow-up';
  import IconDownload from '~icons/mdi/download';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconGithub from '~icons/mdi/github';
  import IconUnfoldMoreHorizontal from '~icons/mdi/unfold-more-horizontal';

  let { heading: headingText, body, certifications }: Syllabi = $props();

  const typeOrder = { syllabus: 0, questions: 1, answers: 2, guide: 3 };

  let sorts = $state(
    untrack(() =>
      Object.fromEntries(certifications.map((c) => [c.code, { key: 'default', dir: 'asc' }]))
    )
  );

  function setSort(code, key) {
    const s = sorts[code];
    if (s.key === key && key !== 'default') {
      sorts[code] = { key, dir: s.dir === 'asc' ? 'desc' : 'asc' };
    } else {
      sorts[code] = { key, dir: 'asc' };
    }
  }

  function sortDocs(code, docs) {
    const { key, dir } = sorts[code];
    if (key === 'default') return docs;
    return [...docs].sort((a, b) => {
      let cmp = 0;
      if (key === 'name') cmp = a.file.split('/').pop().localeCompare(b.file.split('/').pop());
      if (key === 'type') cmp = typeOrder[a.type] - typeOrder[b.type];
      return dir === 'asc' ? cmp : -cmp;
    });
  }

  const typeStyles = {
    syllabus: {
      label: 'Sylabus',
      icon: 'mdi:book-open-variant',
      pill: 'bg-primary-light text-primary'
    },
    questions: {
      label: 'Pytania',
      icon: 'mdi:help-circle-outline',
      pill: 'bg-primary-light text-primary'
    },
    answers: {
      label: 'Odpowiedzi',
      icon: 'mdi:check-circle-outline',
      pill: 'bg-primary-light text-primary'
    },
    guide: {
      label: 'Akredytacja',
      icon: 'mdi:certificate-outline',
      pill: 'bg-primary-light text-primary'
    }
  };
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<Section id="sylabusy" class="bg-white">
  {#snippet heading()}{headingText}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-600 mb-12">{@html body}</div>

  <div class="flex flex-col gap-6">
    {#each certifications as cert (cert.code)}
      <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div
          class="flex items-center gap-3 px-6 py-4"
          style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
        >
          <div class="inline-flex items-center bg-white/10 rounded-lg px-2.5 py-1 shrink-0">
            <span class="text-xs font-bold text-white tracking-wide">{cert.code}</span>
          </div>
          <div>
            <span class="text-sm font-semibold text-white mb-0">{cert.title}</span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm min-w-xl">
            <thead>
              <tr class="bg-gray-50 border-b border-gray-200">
                <th
                  class="text-left px-6 py-3 w-auto"
                  aria-sort={sorts[cert.code].key === 'name'
                    ? sorts[cert.code].dir === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'}
                >
                  <button
                    type="button"
                    onclick={() => setSort(cert.code, 'name')}
                    class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sorts[
                      cert.code
                    ].key === 'name'
                      ? 'text-primary'
                      : 'text-gray-600'}"
                  >
                    Dokument
                    {#if sorts[cert.code].key === 'name'}
                      {#if sorts[cert.code].dir === 'asc'}
                        <IconArrowUp aria-hidden="true" width="12" height="12" />
                      {:else}
                        <IconArrowDown aria-hidden="true" width="12" height="12" />
                      {/if}
                    {:else}
                      <IconUnfoldMoreHorizontal aria-hidden="true" width="12" height="12" />
                    {/if}
                  </button>
                </th>
                <th
                  class="text-center px-4 py-3 w-36"
                  aria-sort={sorts[cert.code].key === 'type'
                    ? sorts[cert.code].dir === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'}
                >
                  <button
                    type="button"
                    onclick={() => setSort(cert.code, 'type')}
                    class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sorts[
                      cert.code
                    ].key === 'type'
                      ? 'text-primary'
                      : 'text-gray-600'}"
                  >
                    Typ
                    {#if sorts[cert.code].key === 'type'}
                      {#if sorts[cert.code].dir === 'asc'}
                        <IconArrowUp aria-hidden="true" width="12" height="12" />
                      {:else}
                        <IconArrowDown aria-hidden="true" width="12" height="12" />
                      {/if}
                    {:else}
                      <IconUnfoldMoreHorizontal aria-hidden="true" width="12" height="12" />
                    {/if}
                  </button>
                </th>
                <th
                  class="text-center text-[10px] font-bold uppercase tracking-wider text-gray-600 px-4 py-3 w-20"
                  >Język</th
                >
                <th class="w-52 py-3 px-6 text-right">
                  <button
                    type="button"
                    onclick={() => setSort(cert.code, 'default')}
                    class="text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sorts[
                      cert.code
                    ].key === 'default'
                      ? 'text-primary'
                      : 'text-gray-600'}"
                  >
                    Reset
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {#each sortDocs(cert.code, cert.documents) as doc, i (doc.file)}
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
                        href="{base}/documents/syllabi/{doc.file}"
                        class="font-mono text-xs text-primary hover:underline no-underline"
                        >{doc.file.split('/').pop()}</a
                      >
                    </div>
                  </td>
                  <td class="px-4 py-3.5 text-center">
                    <span
                      class="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold {typeStyles[
                        doc.type
                      ].pill}"
                    >
                      {typeStyles[doc.type].label}
                    </span>
                  </td>
                  <td class="px-4 py-3.5 text-center">
                    <span class="text-xs font-medium text-gray-600">{doc.lang}</span>
                  </td>
                  <td class="px-6 py-3.5 text-right">
                    <div class="inline-flex items-center gap-2">
                      {#if doc.github}
                        <a
                          href={doc.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-dark pl-2.5 pr-3.5 py-1.5 rounded-lg no-underline"
                        >
                          <IconGithub aria-hidden="true" width="13" height="13" />
                          Kontrybuuj
                        </a>
                      {/if}
                      <a
                        href="{base}/documents/syllabi/{doc.file}"
                        download
                        class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-dark pl-2.5 pr-3.5 py-1.5 rounded-lg no-underline"
                      >
                        <IconDownload aria-hidden="true" width="13" height="13" />
                        Pobierz
                      </a>
                    </div>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/each}
  </div>
</Section>
