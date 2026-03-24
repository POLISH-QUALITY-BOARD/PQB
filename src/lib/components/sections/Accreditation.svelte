<script lang="ts">
  import IconCheck from '~icons/mdi/check';
  import IconDownload from '~icons/mdi/download';

  const downloads = [
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
  ];

  let step1completed = $state(false);
  let step2completed = $state(false);
</script>

<section id="akredytacja" class="bg-gray-50 pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">Akredytacja</h2>

    <h3 class="text-2xl font-semibold text-primary leading-tight mb-8">Jak uzyskać akredytację</h3>

    <div class="relative">
      <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

      <div class="flex flex-col gap-10">
        <!-- Step 1 -->
        <div class="flex gap-6">
          <div
            class="shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-bold flex items-center justify-center relative z-10 overflow-hidden"
          >
            <span class="transition-opacity duration-300" class:opacity-0={step1completed}>1</span>
            <span
              class="absolute transition-opacity duration-300 opacity-0"
              class:opacity-100={step1completed}
            >
              <IconCheck width="20" height="20" />
            </span>
          </div>
          <div class="pt-1.5">
            <h3 class="text-base font-semibold text-primary mb-1">
              Pobierz szablon wniosku o akredytację
            </h3>
            <p class="text-sm text-gray-500 mb-5">
              Wybierz odpowiedni szablon w zależności od rodzaju akredytacji.
            </p>
            <div class="flex flex-col gap-3">
              {#each downloads as { label, href, testId } (testId)}
                <!-- eslint-disable svelte/no-navigation-without-resolve -->
                <a
                  {href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
                  data-testid={testId}
                  download
                  onclick={() => (step1completed = true)}
                >
                  <IconDownload width="15" height="15" />
                  {label}
                </a>
              {/each}
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="flex gap-6">
          <div
            class="shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-bold flex items-center justify-center relative z-10 overflow-hidden"
          >
            <span class="transition-opacity duration-300" class:opacity-0={step2completed}>2</span>
            <span
              class="absolute transition-opacity duration-300 opacity-0"
              class:opacity-100={step2completed}
            >
              <IconCheck width="20" height="20" />
            </span>
          </div>
          <div class="pt-1.5">
            <h3 class="text-base font-semibold text-primary mb-1">Wyślij wniosek</h3>
            <p class="text-sm text-gray-500">
              Wypełniony i podpisany wniosek wyślij na adres
              <a
                href="mailto:info@pqb.org.pl"
                class="font-semibold text-primary"
                onclick={() => (step2completed = true)}>info@pqb.org.pl</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
