<script>
  import Icon from '@iconify/svelte';

  const benefits = [
    {
      icon: 'mdi:certificate-outline',
      title: 'Szkolenia ISTQB',
      description: 'Dostęp do szkoleń prowadzonych przez doświadczonych instruktorów certyfikowanych przez ISTQB.',
      accent: '#1a3f7a',
    },
    {
      icon: 'mdi:account-group-outline',
      title: 'Społeczność',
      description: 'Poznaj innych testerów z całej Polski i buduj wartościową sieć zawodowych kontaktów.',
      accent: '#1a3f7a',
    },
    {
      icon: 'mdi:trending-up',
      title: 'Najnowsze trendy',
      description: 'Bądź na bieżąco z najlepszymi praktykami i nowinkami w testowaniu oprogramowania.',
      accent: '#1a3f7a',
    },
    {
      icon: 'mdi:handshake-outline',
      title: 'Wsparcie zawodowe',
      description: 'Wsparcie mentorów i społeczności w rozwijaniu kariery w branży QA.',
      accent: '#1a3f7a',
    },
  ];
</script>

<section id="dolacz" class="bg-gray-50 pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">

    <div class="mb-14">
      <h2 class="text-4xl md:text-5xl font-bold text-[#1a3f7a] leading-tight">
        Dołącz do nas
      </h2>
    </div>

    <p class="text-gray-600 mb-12">
      Zapraszamy Cię do dołączenia do Polskiej Rady Jakości! Bez względu na to, czy jesteś
      początkującym testerem, czy doświadczonym specjalistą QA, mamy dla Ciebie wiele możliwości rozwoju.
    </p>

    <!-- Benefit items -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
      {#each benefits as benefit (benefit.title)}
        <div class="flex gap-5 items-start">
          <div
            class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
            style="background: linear-gradient(135deg, {benefit.accent} 0%, color-mix(in srgb, {benefit.accent} 70%, black) 100%);"
          >
            <Icon icon={benefit.icon} width="22" height="22" color="white" />
          </div>
          <div>
            <h3 class="text-base font-semibold text-[#1a3f7a] mb-1">{benefit.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-0">{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Timeline -->
    <div class="mb-8">
      <h3 class="text-2xl font-semibold text-[#1a3f7a] leading-tight">Jak dołączyć</h3>
    </div>

    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

      <div class="flex flex-col gap-10">

        <!-- Step 1 -->
        <div class="flex gap-6">
          <div class="relative shrink-0">
            <div class="w-10 h-10 rounded-full bg-[#d6e0f0] text-[#1a3f7a] text-sm font-bold flex items-center justify-center z-10 relative">1</div>
          </div>
          <div class="pt-1.5">
            <h3 class="text-base font-semibold text-[#1a3f7a] mb-1">Pobierz deklarację członkowską</h3>
            <p class="text-sm text-gray-500 mb-5">Wypełnij i podpisz podpisem elektronicznym lub jako skan.</p>
            <a
              // eslint-disable-next-line svelte/no-navigation-without-resolve
              href="documents/deklaracjaCzlonkowska_PQB.docx"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1a3f7a] hover:bg-[#142f5c] pl-3.5 pr-5 py-2.5 rounded-xl no-underline"
              data-testid="download-membership-declaration"
              download
            >
              <Icon icon="mdi:download" width="16" height="16" />
              Pobierz
            </a>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="flex gap-6">
          <div class="relative shrink-0">
            <div class="w-10 h-10 rounded-full bg-[#d6e0f0] text-[#1a3f7a] text-sm font-bold flex items-center justify-center z-10 relative">2</div>
          </div>
          <div class="pt-1.5">
            <h3 class="text-base font-semibold text-[#1a3f7a] mb-1">Pobierz deklarację NDA</h3>
            <p class="text-sm text-gray-500 mb-5">Wypełnij i podpisz deklarację o zachowaniu poufności.</p>
            <a
              // eslint-disable-next-line svelte/no-navigation-without-resolve
              href="documents/deklaracjaNDA_PQB.docx"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1a3f7a] hover:bg-[#142f5c] pl-3.5 pr-5 py-2.5 rounded-xl no-underline"
              data-testid="download-nda-declaration"
              download
            >
              <Icon icon="mdi:download" width="16" height="16" />
              Pobierz
            </a>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="flex gap-6">
          <div class="relative shrink-0">
            <div class="w-10 h-10 rounded-full bg-[#f5c6c8] text-[#e81c24] text-sm font-bold flex items-center justify-center z-10 relative">3</div>
          </div>
          <div class="pt-1.5">
            <h3 class="text-base font-semibold text-[#1a3f7a] mb-1">Wyślij dokumenty</h3>
            <p class="text-sm text-gray-500 mb-0">Oba podpisane dokumenty wyślij na adres <span class="font-semibold text-[#1a3f7a]">info@pqb.org.pl</span>.</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
