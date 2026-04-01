<script lang="ts">
  import Section from '$lib/components/Section.svelte';
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

  const steps = [
    {
      title: 'Pobierz szablon wniosku o akredytację',
      description: 'Wybierz odpowiedni szablon w zależności od rodzaju akredytacji.',
      action: { type: 'downloads' }
    },
    {
      title: 'Wyślij wniosek',
      description: 'Wypełniony i podpisany wniosek wyślij na adres e-mail:',
      action: { type: 'email', address: 'akredytacja@pqb.org.pl' }
    }
  ];

  let completed = $state(steps.map(() => false));

  const complete = (index: number) => {
    completed[index] = true;
  };
</script>

<Section id="akredytacja" class="bg-gray-50">
  {#snippet heading()}Akredytacja{/snippet}

  <h3 class="text-2xl font-semibold text-primary leading-tight mb-8">Jak uzyskać akredytację</h3>

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
            <p class="text-sm text-gray-500" class:mb-5={action.type === 'downloads'}>
              {description}
              {#if action.type === 'email'}
                <a
                  href="mailto:{action.address}"
                  class="font-semibold text-primary"
                  onclick={() => complete(i)}>{action.address}</a
                >
              {/if}
            </p>
            {#if action.type === 'downloads'}
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
</Section>
