<script>
  import Icon from '@iconify/svelte';
  import { Tabs } from 'bits-ui';

  const values = [
    {
      icon: 'mdi:lightning-bolt-outline',
      title: 'Nowoczesność',
      description:
        'Stosujemy aktualne standardy i narzędzia, nadążając za dynamicznie rozwijającą się branżą IT.'
    },
    {
      icon: 'mdi:hand-heart-outline',
      title: 'Zaangażowanie',
      description: 'Działamy z pasją i pełnym oddaniem na rzecz społeczności testerów w Polsce.'
    },
    {
      icon: 'mdi:account-multiple-outline',
      title: 'Inkluzywność',
      description: 'Tworzymy otwarte środowisko dla każdego, niezależnie od poziomu doświadczenia.'
    },
    {
      icon: 'mdi:eye-outline',
      title: 'Transparentność działań',
      description:
        'Działamy jawnie i uczciwie – nasze decyzje i procesy są dostępne dla wszystkich członków.'
    },
    {
      icon: 'mdi:scale-balance',
      title: 'Etyka',
      description:
        'Kierujemy się zasadami etyki zawodowej we wszystkich aspektach naszej działalności.'
    }
  ];

  const board = [
    {
      name: 'Sebastian Małyska',
      role: 'Prezes',
      img: 'images/people/Seba.jpg',
      linkedin: 'https://www.linkedin.com/in/malyska/'
    },
    {
      name: 'Adam Roman',
      role: 'Wiceprezes',
      img: 'images/people/Adam.jpg',
      linkedin: 'https://www.linkedin.com/in/adam-roman-3799723/'
    },
    {
      name: 'Anna Miazek-Bereźnicka',
      role: 'Wiceprezes',
      img: 'images/people/Ania.jpg',
      linkedin: 'https://www.linkedin.com/in/annamiazek/'
    },
    {
      name: 'Wojciech Jaszcz',
      role: 'Wiceprezes',
      img: 'images/people/Wojtek.jpg',
      linkedin: 'https://www.linkedin.com/in/wojtek-jaszcz-5111421/'
    }
  ];

  const committee = [
    {
      name: 'Jan Sabak',
      role: 'Członek',
      img: 'images/people/Jan.jpg',
      linkedin: 'https://www.linkedin.com/in/jsabak/'
    },
    {
      name: 'Joanna Gajewska',
      role: 'Członek',
      img: 'images/people/Asia.jpg',
      linkedin: 'https://www.linkedin.com/in/joanna-gajewska-829623/'
    },
    {
      name: 'Monika Petri-Starego',
      role: 'Członek',
      img: 'images/people/Monika.jpg',
      linkedin: 'https://www.linkedin.com/in/monika-petri-starego/'
    }
  ];
</script>

<section id="onas" class="bg-white pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">
    <div class="mb-14">
      <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight">O nas</h2>
    </div>

    <article id="sklad-osobowy" class="mb-12 pb-8 border-b border-gray-100">
      <h3 class="text-2xl font-semibold leading-tight text-primary mt-0 mb-2">
        Skład osobowy zarządu
      </h3>
      <p class="mb-4 text-gray-600">
        Polish Quality Board kierowana jest przez doświadczonych profesjonalistów z branży
        testowania oprogramowania. Nasz zarząd i członkowie komisji rewizyjnej reprezentują różne
        obszary sektora IT i pracują w organizacjach od startupów po duże międzynarodowe korporacje.
      </p>
      <p class="mb-4 text-gray-600">
        Każdy z naszych członków wnosi unikalną perspektywę i doświadczenie, co pozwala nam spojrzeć
        kompleksowo na wszystkie aspekty testowania oprogramowania i zapewniania jakości.
      </p>

      <div class="mt-8">
        <!-- eslint-disable svelte/no-navigation-without-resolve -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-12">
          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Zarząd
            </p>
            {#each board as person (person.name)}
              <div class="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                <img
                  src={person.img}
                  alt={person.name}
                  class="w-18 h-18 rounded-full object-cover shrink-0"
                />
                <div class="min-w-0 grow">
                  <p class="font-semibold text-primary text-base mb-0 leading-snug">
                    {person.name}
                  </p>
                  <p class="text-sm text-gray-400 mb-0">{person.role}</p>
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  class="shrink-0 text-gray-300 hover:text-primary no-underline"
                >
                  <Icon icon="simple-icons:linkedin" width="18" height="18" />
                </a>
              </div>
            {/each}
          </div>

          <div>
            <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Komisja Rewizyjna
            </p>
            {#each committee as person (person.name)}
              <div class="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
                <img
                  src={person.img}
                  alt={person.name}
                  class="w-18 h-18 rounded-full object-cover shrink-0"
                />
                <div class="min-w-0 grow">
                  <p class="font-semibold text-primary text-base mb-0 leading-snug">
                    {person.name}
                  </p>
                  <p class="text-sm text-gray-400 mb-0">{person.role}</p>
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  class="shrink-0 text-gray-300 hover:text-primary no-underline"
                >
                  <Icon icon="simple-icons:linkedin" width="18" height="18" />
                </a>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </article>

    <article id="statut" class="mb-12 pb-8 border-b border-gray-100">
      <h3 class="text-2xl font-semibold leading-tight text-primary mt-0 mb-6">Statut</h3>

      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <Tabs.Root value="pl" class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <!-- Tab bar -->
        <Tabs.List class="flex border-b border-gray-200 bg-gray-50">
          <Tabs.Trigger
            data-testid="statute-tab-pl"
            value="pl"
            class="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-gray-400 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-white cursor-pointer"
          >
            Polski
          </Tabs.Trigger>
          <Tabs.Trigger
            data-testid="statute-tab-en"
            value="en"
            class="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-gray-400 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-white cursor-pointer"
          >
            English
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="pl">
          <div class="p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div
              class="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
            >
              <Icon icon="mdi:file-document-outline" width="26" height="26" color="white" />
            </div>
            <div class="grow">
              <p class="font-semibold text-primary text-base mb-1">Statut PQB</p>
              <p class="text-sm text-gray-500 mb-0">
                Polska wersja statutu Polish Quality Board – dokument określający zasady działania
                organizacji.
              </p>
            </div>
            <a
              href="documents/Statut_PQB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-3 rounded-xl no-underline"
              data-testid="download-statute-pl"
              download
            >
              <Icon icon="mdi:download" width="16" height="16" />
              Pobierz
            </a>
          </div>
        </Tabs.Content>

        <Tabs.Content value="en">
          <div class="p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div
              class="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
            >
              <Icon icon="mdi:file-document-outline" width="26" height="26" color="white" />
            </div>
            <div class="grow">
              <p class="font-semibold text-primary text-base mb-1">Constitution of PQB</p>
              <p class="text-sm text-gray-500 mb-0">
                English version of the Statutes of the Polish Quality Board – the founding document
                of the organization.
              </p>
            </div>
            <a
              href="documents/Statut_PQB_en-US.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-3 rounded-xl no-underline"
              data-testid="download-statute-en"
              download
            >
              <Icon icon="mdi:download" width="16" height="16" />
              Download
            </a>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </article>

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
          <div class="flex gap-5 items-start">
            <div
              class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
              style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
            >
              <Icon icon={value.icon} width="22" height="22" color="white" />
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
            <Icon icon="mdi:flag-outline" width="16" height="16" />
            Misja
          </h4>
          <p class="text-sm text-gray-500 mb-4">Po co istniejemy</p>
          <ul class="list-none m-0 p-0 flex flex-col gap-3">
            {#each ['Lokalizować, współtworzyć standardy i certyfikację w obszarach dot. jakości w IT.', 'Edukować, promować jakość, prowadzić działalność ekspercką w tym zakresie.', 'Nawiązywać i rozwijać międzynarodowe relacje z innymi organizacjami i osobami w celu promocji polskiego IT.', 'Udostępniać i współpracować nad technologiami, szczególnie tymi, które niosą ryzyka jakościowe.'] as item, i (i)}
              <li class="flex items-start gap-3">
                <span class="relative flex w-2.5 h-2.5 shrink-0 mt-1 items-center justify-center">
                  <span
                    class="ping-soft absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
                  ></span>
                  <span class="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent"></span>
                </span>
                <span class="text-sm text-gray-600 leading-relaxed">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Wizja -->
        <div>
          <h4 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
            <Icon icon="mdi:telescope" width="16" height="16" />
            Wizja
          </h4>
          <p class="text-sm text-gray-500 mb-4">Co chcemy osiągnąć</p>
          <ul class="list-none m-0 p-0 flex flex-col gap-3">
            {#each ['Zdecentralizowana zdrowa polska organizacja wspierająca twórcze i aktywne jednostki.', 'Etyka nie na papierze, a w działaniu.', 'Proste procedury i zwinna organizacja.', 'Certyfikacja ISO w obszarach, którymi się zajmujemy.', 'PQB jako synonim rzetelnej, merytorycznej, profesjonalnej i nowoczesnej wiedzy w zakresie jakości w IT.'] as item, i (i)}
              <li class="flex items-start gap-3">
                <span class="relative flex w-2.5 h-2.5 shrink-0 mt-1 items-center justify-center">
                  <span
                    class="ping-soft absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
                  ></span>
                  <span class="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent"></span>
                </span>
                <span class="text-sm text-gray-600 leading-relaxed">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </article>
  </div>
</section>

<style>
  @keyframes ping-soft {
    0% {
      transform: scale(0.9);
      opacity: 0.7;
    }
    80%,
    100% {
      transform: scale(1.8);
      opacity: 0.12;
    }
  }
  .ping-soft {
    animation: ping-soft 1.1s ease-out infinite;
  }
</style>
