<script>
  import Article from '$lib/components/Article.svelte';
  import IconLinkedin from '~icons/simple-icons/linkedin';
  import imgSeba from '$lib/assets/people/Seba.jpg?enhanced';
  import imgAdam from '$lib/assets/people/Adam.jpg?enhanced';
  import imgAnia from '$lib/assets/people/Ania.jpg?enhanced';
  import imgWojtek from '$lib/assets/people/Wojtek.jpg?enhanced';
  import imgJan from '$lib/assets/people/Jan.jpg?enhanced';
  import imgAsia from '$lib/assets/people/Asia.jpg?enhanced';
  import imgMonika from '$lib/assets/people/Monika.jpg?enhanced';

  const board = [
    {
      name: 'Sebastian Małyska',
      role: 'Prezes',
      img: imgSeba,
      linkedin: 'https://www.linkedin.com/in/malyska/'
    },
    {
      name: 'Adam Roman',
      role: 'Wiceprezes',
      img: imgAdam,
      linkedin: 'https://www.linkedin.com/in/adam-roman-3799723/'
    },
    {
      name: 'Anna Miazek-Bereźnicka',
      role: 'Wiceprezes',
      img: imgAnia,
      linkedin: 'https://www.linkedin.com/in/annamiazek/'
    },
    {
      name: 'Wojciech Jaszcz',
      role: 'Wiceprezes',
      img: imgWojtek,
      linkedin: 'https://www.linkedin.com/in/wojtek-jaszcz-5111421/'
    }
  ];

  const committee = [
    {
      name: 'Jan Sabak',
      role: 'Członek',
      img: imgJan,
      linkedin: 'https://www.linkedin.com/in/jsabak/'
    },
    {
      name: 'Joanna Gajewska',
      role: 'Członek',
      img: imgAsia,
      linkedin: 'https://www.linkedin.com/in/joanna-gajewska-829623/'
    },
    {
      name: 'Monika Petri-Starego',
      role: 'Członek',
      img: imgMonika,
      linkedin: 'https://www.linkedin.com/in/monika-petri-starego/'
    }
  ];
</script>

<Article id="sklad-osobowy" class="mb-12 pb-8 border-b border-gray-100">
  {#snippet heading()}Skład osobowy zarządu{/snippet}

  <p class="mb-4 text-gray-600">
    Polish Quality Board kierowana jest przez doświadczonych profesjonalistów z branży testowania
    oprogramowania. Nasz zarząd i członkowie komisji rewizyjnej reprezentują różne obszary sektora
    IT i pracują w organizacjach od startupów po duże międzynarodowe korporacje.
  </p>
  <p class="mb-4 text-gray-600">
    Każdy z naszych członków wnosi unikalną perspektywę i doświadczenie, co pozwala nam spojrzeć
    kompleksowo na wszystkie aspekty testowania oprogramowania i zapewniania jakości.
  </p>

  <div class="mt-8">
    <!-- eslint-disable svelte/no-navigation-without-resolve -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-12">
      <div>
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">Zarząd</p>
        {#each board as person (person.name)}
          <div class="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
            <enhanced:img
              src={person.img}
              alt={person.name}
              loading="lazy"
              class="w-18 h-18 rounded-full object-cover shrink-0"
            />
            <div class="min-w-0 grow">
              <p class="font-semibold text-primary text-base mb-0 leading-snug">
                {person.name}
              </p>
              <p class="text-sm text-gray-600 mb-0">{person.role}</p>
            </div>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn — ${person.name}`}
              class="shrink-0 text-gray-300 hover:text-primary no-underline"
            >
              <IconLinkedin aria-hidden="true" width="18" height="18" />
            </a>
          </div>
        {/each}
      </div>

      <div>
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">
          Komisja Rewizyjna
        </p>
        {#each committee as person (person.name)}
          <div class="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
            <enhanced:img
              src={person.img}
              alt={person.name}
              loading="lazy"
              class="w-18 h-18 rounded-full object-cover shrink-0"
            />
            <div class="min-w-0 grow">
              <p class="font-semibold text-primary text-base mb-0 leading-snug">
                {person.name}
              </p>
              <p class="text-sm text-gray-600 mb-0">{person.role}</p>
            </div>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn — ${person.name}`}
              class="shrink-0 text-gray-300 hover:text-primary no-underline"
            >
              <IconLinkedin aria-hidden="true" width="18" height="18" />
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</Article>
