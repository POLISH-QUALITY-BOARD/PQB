<script lang="ts">
  import { base } from '$app/paths';
  import Icon from '@iconify/svelte';

  function trackDownload(file: string) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'file_download', {
        file_name: file.split('/').pop()
      });
    }
  }

  const typeOrder = { syllabus: 0, questions: 1, answers: 2, guide: 3 };

  let sorts = $state({
    CTFL: { key: 'default', dir: 'asc' },
    'CTAL-TA': { key: 'default', dir: 'asc' },
    'CTAL-TM': { key: 'default', dir: 'asc' }
  });

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

  const certifications = [
    {
      code: 'CTFL',
      badge: 'Poziom Podstawowy',
      title: 'Certyfikowany Tester Poziom Podstawowy v4.0.1',
      version: 'v4.0.1',
      documents: [
        { name: 'Sylabus', lang: 'PL', type: 'syllabus', file: 'fl-4.0.1/FL-4.0.1-PL-sylabus.pdf' },
        {
          name: 'Pytania – zestaw A',
          lang: 'PL',
          type: 'questions',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-A-pytania-v1.7.pdf'
        },
        {
          name: 'Odpowiedzi – zestaw A',
          lang: 'PL',
          type: 'answers',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-A-odpowiedzi-v1.7.pdf'
        },
        {
          name: 'Pytania – zestaw B',
          lang: 'PL',
          type: 'questions',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-B-pytania-v1.7.pdf'
        },
        {
          name: 'Odpowiedzi – zestaw B',
          lang: 'PL',
          type: 'answers',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-B-odpowiedzi-v1.7.pdf'
        },
        {
          name: 'Pytania – zestaw C',
          lang: 'PL',
          type: 'questions',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-C-pytania-v1.6.pdf'
        },
        {
          name: 'Odpowiedzi – zestaw C',
          lang: 'PL',
          type: 'answers',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-C-odpowiedzi-v1.6.pdf'
        },
        {
          name: 'Pytania – zestaw D',
          lang: 'PL',
          type: 'questions',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-D-pytania-v1.5.pdf'
        },
        {
          name: 'Odpowiedzi – zestaw D',
          lang: 'PL',
          type: 'answers',
          file: 'fl-4.0.1/FL-4.0.1-PL-zestaw-D-odpowiedzi-v1.5.pdf'
        },
        {
          name: 'Wytyczne do akredytacji',
          lang: 'PL',
          type: 'guide',
          file: 'fl-4.0.1/FL-4.0.1-PL-wytyczne-do-akredytacji-v0.3.pdf'
        }
      ]
    },
    {
      code: 'CTAL-TA',
      badge: 'Poziom Zaawansowany',
      title: 'Certyfikowany Tester Poziom Zaawansowany Analityk Testów v4.0',
      version: 'v4.0',
      documents: [
        { name: 'Sylabus', lang: 'PL', type: 'syllabus', file: 'ta-4.0/TA-4.0-PL-sylabus.pdf' },
        { name: 'Pytania', lang: 'PL', type: 'questions', file: 'ta-4.0/TA-4.0-PL-pytania.pdf' },
        { name: 'Odpowiedzi', lang: 'PL', type: 'answers', file: 'ta-4.0/TA-4.0-PL-odpowiedzi.pdf' }
      ]
    },
    {
      code: 'CTAL-TM',
      badge: 'Poziom Zaawansowany',
      title: 'Certyfikowany Tester Poziom Zaawansowany Zarządzanie Testami v3.0',
      version: 'v3.0',
      documents: [
        { name: 'Sylabus', lang: 'PL', type: 'syllabus', file: 'tm-3.0/TM-3.0-PL-sylabus.pdf' },
        {
          name: 'Pytania',
          lang: 'PL',
          type: 'questions',
          file: 'tm-3.0/TM-3.0-PL-pytania-v1.3.3.pdf'
        },
        {
          name: 'Odpowiedzi',
          lang: 'PL',
          type: 'answers',
          file: 'tm-3.0/TM-3.0-PL-odpowiedzi-v1.3.3.pdf'
        },
        {
          name: 'Wytyczne do akredytacji',
          lang: 'PL',
          type: 'guide',
          file: 'tm-3.0/TM-3.0-PL-wytyczne-do-akredytacji-v1.0.pdf'
        }
      ]
    }
  ];
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section id="sylabusy" class="bg-white pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">
    <div class="mb-14">
      <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight">Sylabusy</h2>
    </div>

    <p class="text-gray-600 mb-12">
      Poniżej znajdziesz sylabusy, zestawy pytań i odpowiedzi oraz wytyczne do akredytacji dla
      poszczególnych certyfikatów ISTQB.
    </p>

    <div class="flex flex-col gap-6">
      {#each certifications as cert (cert.code)}
        <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <!-- Card header -->
          <div
            class="flex items-center gap-3 px-6 py-4"
            style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
          >
            <div class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <span class="text-[11px] font-bold text-white">{cert.code}</span>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white mb-0">{cert.title}</h3>
            </div>
          </div>

          <!-- Table -->
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
                        : 'text-gray-400'}"
                    >
                      Dokument
                      <Icon
                        icon={sorts[cert.code].key === 'name'
                          ? sorts[cert.code].dir === 'asc'
                            ? 'mdi:arrow-up'
                            : 'mdi:arrow-down'
                          : 'mdi:unfold-more-horizontal'}
                        width="12"
                        height="12"
                      />
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
                        : 'text-gray-400'}"
                    >
                      Typ
                      <Icon
                        icon={sorts[cert.code].key === 'type'
                          ? sorts[cert.code].dir === 'asc'
                            ? 'mdi:arrow-up'
                            : 'mdi:arrow-down'
                          : 'mdi:unfold-more-horizontal'}
                        width="12"
                        height="12"
                      />
                    </button>
                  </th>
                  <th
                    class="text-center text-[10px] font-bold uppercase tracking-wider text-gray-400 px-4 py-3 w-20"
                    >Język</th
                  >
                  <th class="w-32 py-3 px-6 text-right">
                    <button
                      type="button"
                      onclick={() => setSort(cert.code, 'default')}
                      class="text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {sorts[
                        cert.code
                      ].key === 'default'
                        ? 'text-primary'
                        : 'text-gray-400'}"
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
                        <Icon
                          icon="mdi:file-document-outline"
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
                      <span class="text-xs font-medium text-gray-400">{doc.lang}</span>
                    </td>
                    <td class="px-6 py-3.5 text-right">
                      <a
                        href="{base}/documents/syllabi/{doc.file}"
                        download
                        onclick={() => trackDownload(doc.file)}
                        class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-dark pl-2.5 pr-3.5 py-1.5 rounded-lg no-underline"
                      >
                        <Icon icon="mdi:download" width="13" height="13" />
                        Pobierz
                      </a>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
