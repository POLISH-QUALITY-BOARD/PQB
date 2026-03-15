<script>
  import Icon from '@iconify/svelte';

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

<section id="portfolio" class="bg-gray-50 pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">
    <div class="mb-14">
      <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight">Portfolio ISTQB®</h2>
    </div>

    <p class="text-gray-600 mb-10">
      ISTQB® (International Software Testing Qualifications Board) to międzynarodowy standard
      certyfikacji dla profesjonalistów zajmujących się testowaniem oprogramowania. PQB natomiast to
      jedyna reprezentacja Rady Krajowej ISTQB® w Polsce, odpowiedzialna za organizację egzaminów i
      akredytację szkoleń w naszym kraju. W ramach naszego portfolio znajdziesz wszystkie niezbędne
      materiały, takie jak sylabusy, pytania egzaminacyjne, odpowiedzi oraz wytyczne do akredytacji,
      które pomogą Ci przygotować się do certyfikacji ISTQB® i rozwijać swoją karierę w testowaniu
      oprogramowania. Zapraszamy do zapoznania się z naszymi zasobami i korzystania z nich w swojej
      drodze do sukcesu w branży testowania oprogramowania!
    </p>
  </div>

  <a
    href="https://www.istqb.org/"
    target="_blank"
    rel="noopener noreferrer"
    title="Przejdź do strony ISTQB®"
    class="block w-full mb-12"
  >
    <img
      src="images/istqb-02-12-26-full-name-portfolio-graphic.svg"
      alt="ISTQB® Portfolio - Certification Options"
      class="w-full h-auto block object-contain max-h-96"
    />
  </a>

  <div class="max-w-270 mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
      <!-- Słownik ISTQB -->
      <div>
        <h3 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
          <Icon icon="mdi:book-open-variant" width="16" height="16" />
          Słownik ISTQB®
        </h3>
        <p class="text-sm text-gray-500 mb-4">Terminologia i definicje</p>
        <p class="text-sm text-gray-600 leading-relaxed mb-6">
          Słownik ISTQB® zawiera definicje pojęć stosowanych w testowaniu oprogramowania - niezbędne
          narzędzie zapewniające jednolitą terminologię. Dostępny w wielu językach, w tym po polsku.
        </p>
        <a
          href="https://glossary.istqb.org/en_US/search?term=&exact_matches_first=true"
          target="_blank"
          rel="noopener noreferrer"
          class="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
        >
          <Icon icon="mdi:open-in-new" width="15" height="15" />
          Przejdź do słownika
        </a>
      </div>

      <!-- SCR Register -->
      <div>
        <h3 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
          <Icon icon="mdi:certificate-outline" width="16" height="16" />
          SCR Register
        </h3>
        <p class="text-sm text-gray-500 mb-4">Rejestr certyfikowanych specjalistów</p>
        <p class="text-sm text-gray-600 leading-relaxed mb-6">
          Publiczny rejestr certyfikowanych profesjonalistów. Pozwala sprawdzić ważność certyfikacji
          ISTQB® każdego testera lub specjalisty QA - z datą wydania i ważności.
        </p>
        <a
          href="https://scr.istqb.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
        >
          <Icon icon="mdi:open-in-new" width="15" height="15" />
          Przejdź do rejestru
        </a>
      </div>

      <!-- White Papers -->
      <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm md:col-span-2 mt-6">
        <div
          class="flex items-center gap-3 px-6 py-4"
          style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
        >
          <div class="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Icon icon="mdi:newspaper-variant-outline" width="16" height="16" color="white" />
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
                      : 'text-gray-400'}"
                  >
                    Tytuł
                    <Icon
                      icon={wpSort.key === 'title'
                        ? wpSort.dir === 'asc'
                          ? 'mdi:arrow-up'
                          : 'mdi:arrow-down'
                        : 'mdi:unfold-more-horizontal'}
                      width="12"
                      height="12"
                    />
                  </button>
                </th>
                <th class="w-32 py-3 px-6 text-right">
                  <button
                    type="button"
                    onclick={() => setWpSort('default')}
                    class="text-[10px] font-bold uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 {wpSort.key ===
                    'default'
                      ? 'text-primary'
                      : 'text-gray-400'}"
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
                      <Icon
                        icon="mdi:file-document-outline"
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
                      <Icon icon="mdi:open-in-new" width="13" height="13" />
                      Otwórz
                    </a>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
