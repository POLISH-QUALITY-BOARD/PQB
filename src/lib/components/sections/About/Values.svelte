<script>
  import IconLightningBoltOutline from '~icons/mdi/lightning-bolt-outline';
  import IconHandHeartOutline from '~icons/mdi/hand-heart-outline';
  import IconAccountMultipleOutline from '~icons/mdi/account-multiple-outline';
  import IconEyeOutline from '~icons/mdi/eye-outline';
  import IconScaleBalance from '~icons/mdi/scale-balance';
  import IconFlagOutline from '~icons/mdi/flag-outline';
  import IconTelescope from '~icons/mdi/telescope';

  const values = [
    {
      icon: IconLightningBoltOutline,
      title: 'Nowoczesność',
      description:
        'Stosujemy aktualne standardy i narzędzia, nadążając za dynamicznie rozwijającą się branżą IT.'
    },
    {
      icon: IconHandHeartOutline,
      title: 'Zaangażowanie',
      description: 'Działamy z pasją i pełnym oddaniem na rzecz społeczności testerów w Polsce.'
    },
    {
      icon: IconAccountMultipleOutline,
      title: 'Inkluzywność',
      description: 'Tworzymy otwarte środowisko dla każdego, niezależnie od poziomu doświadczenia.'
    },
    {
      icon: IconEyeOutline,
      title: 'Transparentność działań',
      description:
        'Działamy jawnie i uczciwie – nasze decyzje i procesy są dostępne dla wszystkich członków.'
    },
    {
      icon: IconScaleBalance,
      title: 'Etyka',
      description:
        'Kierujemy się zasadami etyki zawodowej we wszystkich aspektach naszej działalności.'
    }
  ];
</script>

<article id="wizja-misja" class="mb-8 pb-6">
  <h3 class="text-2xl font-semibold leading-tight text-primary mt-0 mb-2">
    Wartości, misja i wizja
  </h3>
  <p class="text-gray-600 mb-10">
    To fundament naszej organizacji – to, co nas definiuje i określa naszą drogę.
  </p>

  <div class="mb-6">
    <h4 class="text-lg font-semibold text-primary mb-1">Wartości</h4>
    <p class="text-sm text-gray-500">Co jest dla nas najważniejsze</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
    {#each values as value (value.title)}
      {@const ValueIcon = value.icon}
      <div class="flex gap-5 items-start">
        <div
          class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
          style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
        >
          <ValueIcon width="22" height="22" color="white" />
        </div>
        <div>
          <h3 class="text-base font-semibold text-primary mb-1">{value.title}</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-0">{value.description}</p>
        </div>
      </div>
    {/each}
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-8">
    <!-- Misja -->
    <div>
      <h4 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
        <IconFlagOutline width="16" height="16" />
        Misja
      </h4>
      <p class="text-sm text-gray-500 mb-4">Po co istniejemy</p>
      <ul class="list-none m-0 p-0 flex flex-col gap-3">
        {#each ['Lokalizować, współtworzyć standardy i certyfikację w obszarach dot. jakości w IT.', 'Edukować, promować jakość, prowadzić działalność ekspercką w tym zakresie.', 'Nawiązywać i rozwijać międzynarodowe relacje z innymi organizacjami i osobami w celu promocji polskiego IT.', 'Udostępniać i współpracować nad technologiami, szczególnie tymi, które niosą ryzyka jakościowe.'] as item, i (i)}
          <li class="flex items-start gap-3">
            <span class="inline-flex w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></span>
            <span class="text-sm text-gray-600 leading-relaxed">{item}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Wizja -->
    <div>
      <h4 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
        <IconTelescope width="16" height="16" />
        Wizja
      </h4>
      <p class="text-sm text-gray-500 mb-4">Co chcemy osiągnąć</p>
      <ul class="list-none m-0 p-0 flex flex-col gap-3">
        {#each ['Zdecentralizowana zdrowa polska organizacja wspierająca twórcze i aktywne jednostki.', 'Etyka nie na papierze, a w działaniu.', 'Proste procedury i zwinna organizacja.', 'Certyfikacja ISO w obszarach, którymi się zajmujemy.', 'PQB jako synonim rzetelnej, merytorycznej, profesjonalnej i nowoczesnej wiedzy w zakresie jakości w IT.'] as item, i (i)}
          <li class="flex items-start gap-3">
            <span class="inline-flex w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></span>
            <span class="text-sm text-gray-600 leading-relaxed">{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</article>
