<script>
  import Section from '$lib/components/Section.svelte';
  import Dictionary from '$lib/components/sections/Portfolio/Dictionary.svelte';
  import Register from '$lib/components/sections/Portfolio/SCR.svelte';
  import WhitePapers from '$lib/components/sections/Portfolio/WhitePapers.svelte';
</script>

<Section id="portfolio-istqb" class="bg-gray-50">
  {#snippet heading()}Portfolio ISTQB®{/snippet}

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

  <a
    href="https://www.istqb.org/"
    target="_blank"
    rel="noopener noreferrer"
    title="Przejdź do strony ISTQB®"
    class="block w-full mb-12"
  >
    <img
      src="images/istqb-02-12-26-full-name-portfolio-graphic.svg"
      alt="ISTQB® Portfolio - Opcje certyfikacji"
      class="w-full h-auto block object-contain max-h-96"
    />
  </a>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
    <Dictionary />
    <Register />
    <WhitePapers />
  </div>
</Section>
