<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import IconCertificateOutline from '~icons/mdi/certificate-outline';
  import IconAccountGroupOutline from '~icons/mdi/account-group-outline';
  import IconTrendingUp from '~icons/mdi/trending-up';
  import IconHandshakeOutline from '~icons/mdi/handshake-outline';
  import IconCheck from '~icons/mdi/check';
  import IconDownload from '~icons/mdi/download';

  const benefits = [
    {
      icon: IconCertificateOutline,
      title: 'Szkolenia ISTQB®',
      description:
        'Dostęp do szkoleń prowadzonych przez doświadczonych instruktorów certyfikowanych przez ISTQB®.'
    },
    {
      icon: IconAccountGroupOutline,
      title: 'Społeczność',
      description:
        'Poznaj innych testerów z całej Polski i buduj wartościową sieć zawodowych kontaktów.'
    },
    {
      icon: IconTrendingUp,
      title: 'Najnowsze trendy',
      description:
        'Bądź na bieżąco z najlepszymi praktykami i nowinkami w testowaniu oprogramowania.'
    },
    {
      icon: IconHandshakeOutline,
      title: 'Wsparcie zawodowe',
      description: 'Wsparcie mentorów i społeczności w rozwijaniu kariery w branży QA.'
    }
  ];

  const steps = [
    {
      title: 'Pobierz deklarację członkowską',
      description: 'Wypełnij i podpisz podpisem elektronicznym lub jako skan.',
      action: {
        type: 'download',
        href: 'documents/deklaracjaCzlonkowska_PQB.docx',
        testId: 'download-membership-declaration-button'
      }
    },
    {
      title: 'Pobierz deklarację NDA',
      description: 'Wypełnij i podpisz deklarację o zachowaniu poufności.',
      action: {
        type: 'download',
        href: 'documents/deklaracjaNDA_PQB.docx',
        testId: 'download-nda-declaration-button'
      }
    },
    {
      title: 'Wyślij dokumenty',
      description: 'Oba podpisane dokumenty wyślij na adres e-mail:',
      action: { type: 'email', address: 'info@pqb.org.pl' }
    }
  ];

  let completed = $state(steps.map(() => false));

  const complete = (index: number) => {
    completed[index] = true;
  };
</script>

<Section id="dolacz" class="bg-gray-50">
  {#snippet heading()}Dołącz do nas{/snippet}

  <p class="text-gray-600 mb-12">
    Zapraszamy Cię do dołączenia do Polish Quality Board! Bez względu na to, czy jesteś
    początkującym testerem, czy doświadczonym specjalistą QA, mamy dla Ciebie wiele możliwości
    rozwoju.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
    {#each benefits as { icon: BenefitIcon, title, description } (title)}
      <div class="flex gap-5 items-start">
        <div
          class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm bg-linear-to-br from-primary to-primary-dark"
        >
          <BenefitIcon width="22" height="22" color="white" />
        </div>
        <div>
          <p class="text-base font-semibold text-primary mb-1">{title}</p>
          <p class="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    {/each}
  </div>

  <h3 class="text-2xl font-semibold text-primary leading-tight mb-8">Jak dołączyć</h3>

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
              <IconCheck aria-hidden="true" width="20" height="20" />
            </span>
          </div>
          <div class="pt-1.5">
            <p class="text-base font-semibold text-primary mb-1">{title}</p>
            <p class="text-sm text-gray-500" class:mb-5={action.type === 'download'}>
              {description}
              {#if action.type === 'email'}
                <a
                  href="mailto:{action.address}"
                  class="font-semibold text-primary"
                  onclick={() => complete(i)}>{action.address}</a
                >
              {/if}
            </p>
            {#if action.type === 'download'}
              <!-- eslint-disable svelte/no-navigation-without-resolve -->
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-2.5 rounded-xl no-underline"
                data-testid={action.testId}
                download
                onclick={() => complete(i)}
              >
                <IconDownload aria-hidden="true" width="16" height="16" />
                Pobierz
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>
