<script>
  import Icon from '@iconify/svelte';

  const linkedinClass =
    'inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded font-semibold transition-all duration-300 no-underline hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:text-white';
  const btnSecondary =
    'inline-block px-8 py-3 rounded bg-blue-600 text-white font-semibold transition-all duration-300 no-underline hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg';
  const memberCardClass =
    'bg-linear-to-br from-gray-100 to-white border-2 border-gray-300 rounded-lg p-8 text-center transition-all duration-300 shadow hover:border-blue-600 hover:shadow-lg hover:-translate-y-1';
</script>

<section id="onas" class="py-16 border-b border-gray-300 last:border-b-0">
  <h2
    class="text-3xl font-semibold leading-tight text-blue-600 border-b-4 border-orange-500 pb-2 mt-4 mb-2"
  >
    O nas
  </h2>

  <article id="kim-jestesmy" class="mb-8 pb-6">
    <h3 class="text-2xl font-semibold leading-tight text-blue-900 mt-0 mb-2">
      Kim jesteśmy i co robimy jako rada krajowa
    </h3>
    <p class="mb-4">
      Polska Rada Jakości (PQB - Polish Quality Board) jest krajową organizacją zajmującą się
      promocją testowania oprogramowania i rozwojem osób zainteresowanych jakością oprogramowania w
      Polsce.
    </p>
  </article>

  <article id="sklad-osobowy" class="mb-8 pb-6">
    <h3 class="text-2xl font-semibold leading-tight text-blue-900 mt-0 mb-2">
      Skład osobowy zarządu i komisji rewizyjnej
    </h3>
    <p class="mb-4">
      Polish Quality Board kierowana jest przez doświadczonych profesjonalistów z branży testowania
      oprogramowania. Nasz zarząd i członkowie komisji rewizyjnej reprezentują różne sektory
      przemysłu - IT, od startupów po duże korporacje międzynarodowe.
    </p>
    <p class="mb-4">
      Każdy z naszych członków wnosi unikalną perspektywę i doświadczenie, co pozwala nam na
      holistyczne podejście do wszystkich aspektów testowania oprogramowania i zapewniania jakości.
    </p>

    <div class="mt-8">
      <h4 class="text-xl font-semibold leading-tight text-blue-900 mt-6 mb-6">Zarząd</h4>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-8"
      >
        <div class={memberCardClass}>
          <img
            src="images/people/Seba.jpg"
            alt="Sebastian Małyska"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Sebastian Małyska</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Prezes
          </div>
          <a
            href="https://www.linkedin.com/in/malyska/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class={memberCardClass}>
          <img
            src="images/people/Adam.jpg"
            alt="Adam Roman"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Adam Roman</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Wiceprezes
          </div>
          <a
            href="https://www.linkedin.com/in/adam-roman-3799723/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class={memberCardClass}>
          <img
            src="images/people/Ania.jpg"
            alt="Anna Miazek-Bereźnicka"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Anna Miazek-Bereźnicka</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Wiceprezes
          </div>
          <a
            href="https://www.linkedin.com/in/annamiazek/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class={memberCardClass}>
          <img
            src="images/people/Wojtek.jpg"
            alt="Wojciech Jaszcz"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Wojciech Jaszcz</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Wiceprezes
          </div>
          <a
            href="https://www.linkedin.com/in/wojtek-jaszcz-5111421/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>
      </div>

      <h4 class="text-xl font-semibold leading-tight text-blue-900 mt-6 mb-6">Komisja Rewizyjna</h4>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-8"
      >
        <div class={memberCardClass}>
          <img
            src="images/people/Jan.jpg"
            alt="Jan Sabak"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Jan Sabak</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Członek
          </div>
          <a
            href="https://www.linkedin.com/in/jsabak/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class={memberCardClass}>
          <img
            src="images/people/Asia.jpg"
            alt="Joanna Gajewska"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Joanna Gajewska</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Członek
          </div>
          <a
            href="https://www.linkedin.com/in/joanna-gajewska-829623/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>

        <div class={memberCardClass}>
          <img
            src="images/people/Monika.jpg"
            alt="Monika Petri-Starego"
            class="w-30 h-30 rounded-full object-cover mb-4 border-4 border-blue-600 mx-auto"
          />
          <div class="text-xl font-bold text-blue-900 mb-2">Monika Petri-Starego</div>
          <div class="text-sm text-orange-500 font-semibold mb-6 uppercase tracking-wide">
            Członek
          </div>
          <a
            href="https://www.linkedin.com/in/monika-petri-starego/"
            target="_blank"
            rel="noopener noreferrer"
            class={linkedinClass}
          >
            <Icon icon="simple-icons:linkedin" width="20" height="20" />
            Profil LinkedIn
          </a>
        </div>
      </div>
    </div>
  </article>

  <article id="statut" class="mb-8 pb-6">
    <h3 class="text-2xl font-semibold leading-tight text-blue-900 mt-0 mb-2">Statut</h3>
    <p class="italic text-gray-500 mb-6 text-sm font-medium">
      Nasze dokumenty statutowe dostępne w dwóch wersjach językowych:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 my-8">
      <div
        class="bg-gray-100 p-8 rounded-lg border-l-4 border-l-blue-600 transition-all duration-300 flex flex-col hover:-translate-y-1.5 hover:shadow-md hover:border-l-orange-500"
      >
        <div
          class="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit"
        >
          🇵🇱 Polski
        </div>
        <h4 class="text-xl font-semibold text-blue-900 mt-0 mb-2">Statut PQB</h4>
        <p class="text-gray-500 mb-6 grow">Wersja polska statutu Polish Quality Board.</p>
        <a
          // eslint-disable-next-line svelte/no-navigation-without-resolve
          href="documents/Statut_PQB.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class={`${btnSecondary} self-start`}
          data-testid="download-statute-pl"
          download
        >
          📄 Pobierz statut PQB
        </a>
      </div>
      <div
        class="bg-gray-100 p-8 rounded-lg border-l-4 border-l-blue-600 transition-all duration-300 flex flex-col hover:-translate-y-1.5 hover:shadow-md hover:border-l-orange-500"
      >
        <div
          class="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit"
        >
          🇬🇧 English
        </div>
        <h4 class="text-xl font-semibold text-blue-900 mt-0 mb-2">Constitution of PQB</h4>
        <p class="text-gray-500 mb-6 grow">
          English version of the Statutes of the Polish Quality Board.
        </p>
        <a
          // eslint-disable-next-line svelte/no-navigation-without-resolve
          href="documents/Statut_PQB_en-US.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class={`${btnSecondary} self-start`}
          data-testid="download-statute-en"
          download
        >
          📄 Download Statutes of PQB
        </a>
      </div>
    </div>
  </article>

  <article id="wizja-misja" class="mb-8 pb-6">
    <h3 class="text-2xl font-semibold leading-tight text-blue-900 mt-0 mb-2">
      Wartości, misja i wizja / Values, Mission and Vision
    </h3>
    <p class="text-center text-gray-500 text-lg mb-10 italic max-w-150 mx-auto">
      To fundament naszej organizacji - to, co nas definiuje i określa naszą drogę / This is the
      foundation of our organization - what defines us and determines our path
    </p>

    <div class="bg-blue-50 p-8 rounded-xl mb-10 border-2 border-blue-600/20 shadow">
      <div class="text-center mb-10">
        <h4 class="text-xl font-semibold text-blue-600 mt-0 mb-2">Wartości / Values</h4>
        <p class="italic text-gray-500 mb-6 text-sm font-medium">
          Co jest dla nas najważniejsze / What matters most to us
        </p>
      </div>
      <ul
        class="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6"
      >
        {#each ['Nowoczesność / Modernity', 'Zaangażowanie / Commitment', 'Inkluzywność / Inclusivity', 'Transparentność działań / Transparency', 'Etyka / Ethics'] as value, index (index)}
          <li
            class="relative pl-10 py-5 pr-4 bg-white/80 rounded-lg border-l-4 border-l-orange-500 font-medium transition-all duration-300 hover:bg-white hover:translate-x-1 hover:shadow before:content-['✓'] before:absolute before:left-3 before:text-orange-500 before:font-bold before:text-xl"
          >
            {value}
          </li>
        {/each}
      </ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 mt-8">
      <div
        class="relative overflow-hidden bg-linear-to-br from-gray-100 to-white p-10 rounded-xl border-2 border-t-blue-600 border-l-transparent border-r-transparent border-b-transparent shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/20 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-orange-500"
      >
        <h4 class="text-2xl font-semibold text-blue-900 mt-0 mb-2">Misja / Mission</h4>
        <p class="italic text-gray-500 mb-6 text-sm font-medium">Po co istniejemy / Why we exist</p>
        <ul class="list-none m-0 p-0">
          {#each ['Lokalizować, współtworzyć standardy i certyfikację w obszarach dot. jakości w IT / Localize, co-create standards and certification in IT quality areas', 'Edukować, promować jakość, prowadzić działalność ekspercką w tym zakresie / Educate, promote quality, conduct expert activities in this field', 'Nawiązywać i rozwijać międzynarodowe relacje z innymi organizacjami i osobami w celu promocji polskiego IT / Build and develop international relations with organizations and individuals to promote Polish IT', 'Udostępniać i współpracować nad technologiami, szczególnie tymi, które niosą jakościowe ryzyka / Share and collaborate on technologies, especially those carrying quality risks'] as item, index (index)}
            <li
              class="relative pl-7 py-4 my-2 text-gray-700 leading-relaxed transition-all duration-200 hover:text-blue-900 hover:translate-x-1 before:content-['→'] before:absolute before:left-0 before:text-orange-500 before:font-bold before:text-lg"
            >
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <div
        class="relative overflow-hidden bg-linear-to-br from-gray-100 to-white p-10 rounded-xl border-2 border-t-blue-900 border-l-transparent border-r-transparent border-b-transparent shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500/20 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-orange-500"
      >
        <h4 class="text-2xl font-semibold text-blue-900 mt-0 mb-2">Wizja / Vision</h4>
        <p class="italic text-gray-500 mb-6 text-sm font-medium">
          Co chcemy osiągnąć / What we want to achieve
        </p>
        <ul class="list-none m-0 p-0">
          {#each ['Zdecentralizowana zdrowa polska organizacja wspierająca twórcze i aktywne jednostki / A decentralized healthy Polish organization supporting creative and active individuals', 'Etyka nie na papierze a w działaniu / Ethics not on paper but in action', 'Proste procedury i zwinna organizacja / Simple procedures and agile organization', 'Certyfikacja ISO w obszarach, którymi się zajmujemy / ISO certified in the areas we operate', 'PQB jako synonim rzetelnej, merytorycznej, profesjonalnej, nowoczesnej wiedzy w zakresie jakości w IT / PQB as a synonym for reliable, substantive, professional, modern knowledge in IT quality'] as item, index (index)}
            <li
              class="relative pl-7 py-4 my-2 text-gray-700 leading-relaxed transition-all duration-200 hover:text-blue-900 hover:translate-x-1 before:content-['→'] before:absolute before:left-0 before:text-orange-500 before:font-bold before:text-lg"
            >
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </article>
</section>
