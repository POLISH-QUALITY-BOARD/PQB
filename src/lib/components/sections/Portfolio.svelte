<script>
  import Dictionary from './Portfolio/Dictionary.svelte';
  import Register from './Portfolio/Register.svelte';
  import WhitePapers from './Portfolio/WhitePapers.svelte';
</script>

<section id="portfolio" class="bg-gray-50 pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">
    <div class="mb-14">
      <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight">Portfolio ISTQB®</h2>
    </div>

    <p class="text-gray-600 mb-10">
      ISTQB® (International Software Testing Qualifications Board) to międzynarodowy standard
      certyfikacji dla profesjonalistów zajmujących się testowaniem oprogramowania. PQB natomiast to
      jedyna reprezentacja Rady Krajowej ISTQB® w Polsce, odpowiedzialna za organizację egzaminów i
      akredytację szkoleń w naszym kraju. W ramach naszego portfolio znajdziesz wszystkie niezbędne
      materiały, takie jak sylabusy, pytania egzaminacyjne, odpowiedzi oraz wytyczne do akredytacji,
      które pomogą Ci przygotować się do certyfikacji ISTQB® i rozwijać swoją karierę w testowaniu
      oprogramowania. Zapraszamy do zapoznania się z naszymi zasobami i korzystania z nich w swojej
      drodze do sukcesu w branży testowania oprogramowania!
    </p>
  </div>

  <a
    href="https://www.istqb.org/"
    target="_blank"
    rel="noopener noreferrer"
    title="Przejdź do strony ISTQB®"
    class="block w-full mb-12"
  >
    <img
      src="images/istqb-02-12-26-full-name-portfolio-graphic.svg"
      alt="ISTQB® Portfolio - Certification Options"
      class="w-full h-auto block object-contain max-h-96"
    />
  </a>

  <div class="max-w-270 mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
      <Dictionary />
      <Register />
      <WhitePapers />
    </div>
  </div>
</section>
