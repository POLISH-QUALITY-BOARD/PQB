<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import IconCheck from '~icons/mdi/check';
  import IconDownload from '~icons/mdi/download';

  const steps = [
    {
      title: 'Pobierz cennik',
      description:
        'Zapoznaj się z aktualnym cennikiem akredytacji, aby dowiedzieć się o obowiązujących opłatach.',
      action: {
        type: 'downloads',
        downloads: [
          {
            label: 'Cennik akredytacji',
            href: 'documents/Akredytacje-cennik.pdf',
            testId: 'download-accreditation-pricing'
          }
        ]
      }
    },
    {
      title: 'Pobierz szablon wniosku o akredytację',
      description: 'Wybierz odpowiedni szablon w zależności od rodzaju akredytacji.',
      action: {
        type: 'downloads',
        downloads: [
          {
            label: 'Wniosek o akredytację trenera',
            href: 'documents/Szablon-wniosek-o-akredytacje-trenera-v1.0.docx',
            testId: 'download-accreditation-trainer'
          },
          {
            label: 'Wniosek o akredytację dostawcy szkoleń',
            href: 'documents/Szablon-wniosek-o-akredytacje-dostawcy-szkoleń-v1.0.docx',
            testId: 'download-accreditation-provider'
          },
          {
            label: 'Wniosek o akredytację materiałów szkoleniowych',
            href: 'documents/Szablon-wniosek-o-akredytacje-materialow-v1.0.docx',
            testId: 'download-accreditation-materials'
          }
        ]
      }
    },
    {
      title: 'Wykonaj przelew i wyślij wniosek',
      description:
        'Wypełniony i podpisany wniosek oraz potwierdzenie przelewu na konto 05 1240 4533 1111 0011 6237 5595 wyślij na adres e-mail:',
      action: { type: 'email', address: 'akredytacja@pqb.org.pl' }
    },
    {
      title: 'Oczekuj na weryfikację i decyzję',
      description:
        'Daj nam chwilę na weryfikację wniosku oraz przegląd materiałów lub audyt trenerski.'
    }
  ];

  let completed = $state(steps.map(() => false));

  const complete = (index: number) => {
    completed[index] = true;
  };
</script>

<Section id="akredytacja" class="bg-gray-50">
  {#snippet heading()}Akredytacja{/snippet}

  <p class="text-gray-600 mb-4">
    Znak ISTQB® jest znakiem zastrzeżonym dla International Software Testing Qualifications Board i
    może być wykorzystywany wyłącznie w przypadku szkoleń przygotowujących do certyfikacji
    testerskiej ISTQB®, które posiadają akredytację.
  </p>
  <p class="text-gray-600 mb-4">
    Celem akredytacji jest dostarczenie nawyższej możliwej jakości szkoleń, które w najlepszy
    możliwy sposób przygotują kandydata do zdobycia certyfikatu Certyfikowanego Testera ISTQB®.
  </p>
  <p class="text-gray-600 mb-4">
    Akredytowane szkolenia z zakresu wybranej certyfikacji testerskiej opracowanej przez ISTQB® mogą
    być prowadzone wyłącznie przez akredytowanych dostawców szkoleń, na bazie akredytowanych
    materiałów szkoleniowych i przez akredytowanych trenerów, <em
      >z zastrzeżeniem, że wymóg akredytacji trenerskiej obowiązuje od 1 stycznia 2027 roku</em
    >.
  </p>
  <p class="text-gray-600 mb-12 pb-8">
    Procesy akredytacyjne obowiązujące w PQB są opisane w <a
      // eslint-disable-next-line svelte/no-navigation-without-resolve
      href={base + '/documents/Procesy-akredytacyjne-w-PQB-v1.0.pdf'}
      class="underline hover:text-primary">niniejszym dokumencie</a
    >.
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      <Article id="akredytacja-dostawcy-szkolen-istqb">
        {#snippet heading()}Akredytacja dostawcy szkoleń ISTQB®{/snippet}

        <p class="text-gray-600">
          Celem akredytacji dostawcy szkoleń jest potwierdzenie, że dostawca szkoleń spełnia
          wymagania PQB w zakresie możliwości realizacji akredytowanych szkoleń ISTQB®.
        </p>
      </Article>
      <Article id="akredytacja-materialow-szkoleniowych-istqb">
        {#snippet heading()}Akredytacja materiałów szkoleniowych ISTQB®{/snippet}

        <p class="text-gray-600">
          Celem udzielenia akredytacji na materiały szkoleniowe jest potwierdzenie, że materiały
          szkoleniowe wykorzystywane przez trenerów ISTQB® spełniają określone standardy i kryteria
          jakości kształcenia.
        </p>
      </Article>
      <Article id="akredytacja-trenerzy-istqb">
        {#snippet heading()}Akredytacja trenerska ISTQB®{/snippet}

        <p class="text-gray-600">
          Celem udzielenia akredytacji trenerskiej jest potwierdzenie, że trener prowadzący
          szkolenia ISTQB® spełnia określone standardy i kryteria jakości kształcenia.
        </p>
      </Article>
    </div>
    <div>
      <Article id="jak-uzyskac-akredytacje">
        {#snippet heading()}Jak uzyskać akredytację{/snippet}

        <div class="relative">
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

          <div class="flex flex-col gap-10">
            {#each steps as { title, description, action }, i (title)}
              <div class="flex gap-6">
                <div
                  class="shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-bold flex items-center justify-center relative z-10 overflow-hidden"
                >
                  <span class="transition-opacity duration-300" class:opacity-0={completed[i]}
                    >{i + 1}</span
                  >
                  <span
                    class="absolute transition-opacity duration-300 opacity-0"
                    class:opacity-100={completed[i]}
                  >
                    <IconCheck width="20" height="20" />
                  </span>
                </div>
                <div class="pt-1.5">
                  <p class="text-base font-semibold text-primary mb-1">{title}</p>
                  <p class="text-sm text-gray-600" class:mb-5={action?.type === 'downloads'}>
                    {description}
                    {#if action?.type === 'email'}
                      <a
                        href="mailto:{action.address}"
                        class="font-semibold text-primary"
                        onclick={() => complete(i)}>{action.address}</a
                      >
                    {/if}
                  </p>
                  {#if action?.type === 'downloads'}
                    <div class="flex flex-col gap-3">
                      {#each action.downloads as { label, href, testId } (testId)}
                        <!-- eslint-disable svelte/no-navigation-without-resolve -->
                        <a
                          {href}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
                          data-testid={testId}
                          download
                          onclick={() => complete(i)}
                        >
                          <IconDownload width="15" height="15" />
                          {label}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </Article>
    </div>
  </div>
</Section>
