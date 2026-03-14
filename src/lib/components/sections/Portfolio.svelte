<script>
  const cardClass =
    'bg-white border border-gray-300 rounded-xl overflow-hidden shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col';
  const cardHeaderClass =
    'bg-linear-to-br from-blue-600 to-blue-900 text-white px-6 py-8 border-b-4 border-orange-500';
  const btnSecondary =
    'inline-block px-8 py-3 rounded bg-blue-600 text-white font-semibold transition-all duration-300 no-underline hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg';
</script>

<section id="portfolio" class="py-16 border-b border-gray-300 last:border-b-0">
  <h2
    class="text-3xl font-semibold leading-tight text-blue-600 border-b-4 border-orange-500 pb-2 mt-4 mb-2"
  >
    Portfolio ISTQB
  </h2>

  <p class="text-lg text-gray-600 text-center max-w-150 mx-auto mt-6 mb-10 italic">
    ISTQB (International Software Testing Qualifications Board) to międzynarodowy standard
    certyfikacji dla profesjonalistów zajmujących się testowaniem oprogramowania.
  </p>

  <article id="materialy-istqb" class={`mb-8 ${cardClass}`}>
    <div class={cardHeaderClass}>
      <h3 class="text-white m-0 text-2xl font-semibold flex items-center gap-2">
        📚 Sylabusy ISTQB
      </h3>
    </div>
    <div class="p-8 grow flex flex-col">
      <div class="mb-8 pb-6 border-b border-gray-300">
        <p class="mb-4">
          Sylabusy ISTQB definiują obszary wiedzy i umiejętności, które powinni posiadać testerzy na
          poszczególnych poziomach certyfikacji:
        </p>
        <div class="my-8 text-center flex justify-center items-center px-4">
          <a
            href="https://www.istqb.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Przejdź do strony ISTQB"
            class="block w-full max-w-175 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            <img
              src="images/istqb-02-12-26-full-name-portfolio-graphic.svg"
              alt="ISTQB Portfolio - Certification Options"
              class="w-full h-auto max-w-175 rounded-lg shadow block object-contain"
            />
          </a>
        </div>
        <p class="text-gray-500 text-sm mb-0">
          Wszystkie sylabusy są regularnie aktualizowane, aby odzwierciedlać najnowsze trendy i
          praktyki w testowaniu oprogramowania.
        </p>
      </div>
    </div>
  </article>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
    <article id="slownik" class={cardClass}>
      <div class={cardHeaderClass}>
        <h3 class="text-white m-0 text-2xl font-semibold flex items-center gap-2">
          📖 Słownik ISTQB
        </h3>
      </div>
      <div class="p-8 grow flex flex-col">
        <p class="mb-4">
          Słownik ISTQB zawiera definicje pojęć stosowanych w testowaniu oprogramowania. Jest to
          niezbędne narzędzie dla każdego testera, zapewniające jednolitą terminologię w
          międzynarodowej społeczności testerów.
        </p>
        <p class="mb-4">
          Słownik jest dostępny w wielu językach, w tym w języku polskim, co ułatwia zrozumienie
          koncepcji i standardów testowania dla polskich specjalistów.
        </p>
        <div class="flex gap-4 justify-start mt-6">
          <a
            href="https://glossary.istqb.org/en_US/search?term=&exact_matches_first=true"
            target="_blank"
            rel="noopener noreferrer"
            class={btnSecondary}
          >
            Przejdź do Słownika ISTQB
          </a>
        </div>
      </div>
    </article>

    <article id="scr" class={cardClass}>
      <div class={cardHeaderClass}>
        <h3 class="text-white m-0 text-2xl font-semibold flex items-center gap-2">
          ✓ SCR Register
        </h3>
      </div>
      <div class="p-8 grow flex flex-col">
        <h4 class="text-xl font-semibold text-blue-600 mt-0 mb-4">
          Software Certification Register
        </h4>
        <p class="mb-4">
          SCR (Software Certification Register) to publiczny rejestr certyfikowanych
          profesjonalistów. Pozwala on sprawdzić ważność certyfikacji ISTQB każdego testera lub
          specjalisty QA.
        </p>
        <p class="mb-4">
          Każdy certyfikat wydany przez ISTQB jest rejestrowany w SCR z datą wydania i ważności, co
          zapewnia przejrzystość i uczciwość procesu certyfikacji.
        </p>
        <div class="flex gap-4 justify-start mt-6">
          <a
            href="https://scr.istqb.org/"
            target="_blank"
            rel="noopener noreferrer"
            class={btnSecondary}
          >
            Przejdź do rejestru SCR
          </a>
        </div>
      </div>
    </article>

    <article id="whitepapers" class={cardClass}>
      <div class={cardHeaderClass}>
        <h3 class="text-white m-0 text-2xl font-semibold flex items-center gap-2">
          📋 Polecane White Papers
        </h3>
      </div>
      <div class="p-8 grow flex flex-col">
        <p class="mb-4">
          White papers zawierają pogłębione analizy i badania naukowe na temat testowania
          oprogramowania i zapewniania jakości. Są one cennym źródłem wiedzy dla profesjonalistów
          chcących poznać najnowsze trendy i metodologie w branży.
        </p>
        <p class="mb-4">
          Poniżej znajdziesz wybrane publikacje naukowe rekomendowane dla osób zainteresowanych
          zaawansowanymi zagadnieniami z zakresu testowania i kontroli jakości:
        </p>
        <ul class="ml-4 pl-4 list-disc">
          <li class="mb-2">
            <a
              href="https://ww2.ii.uj.edu.pl/~roman/icst25-preprint.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 no-underline transition-colors duration-300 hover:text-orange-500"
            >
              Black-Box Testing for Practitioners: A Case of the New ISTQB Test Analyst Syllabus
            </a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</section>
