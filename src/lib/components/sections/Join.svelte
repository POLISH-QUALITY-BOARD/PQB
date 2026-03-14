<script>
  const btnPrimary =
    'inline-block px-8 py-3 rounded bg-orange-700 text-white font-semibold transition-all duration-300 no-underline hover:-translate-y-0.5 hover:bg-orange-800 hover:shadow-lg';
  const benefitCardClass =
    'bg-gray-100 p-8 rounded-lg border-t-4 border-t-blue-600 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md';
</script>

<section id="dolacz" class="py-16 border-b border-gray-300 last:border-b-0">
  <h2
    class="text-3xl font-semibold leading-tight text-blue-600 border-b-4 border-orange-500 pb-2 mt-4 mb-2"
  >
    Dołącz do nas
  </h2>

  <p class="mb-4">
    Zapraszamy Cię do dołączenia do Polskiej Rady Jakości! Bez względu na to, czy jesteś
    początkującym testerem, czy doświadczonym specjalistą QA, mamy dla Ciebie wiele możliwości
    rozwoju.
  </p>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 my-8"
  >
    <div class={benefitCardClass}>
      <h3 class="text-2xl font-semibold text-blue-600 mt-0 mb-2">Szkolenia</h3>
      <p class="mb-0">
        Dostęp do wysokiej jakości szkoleń ISTQB prowadzonych przez doświadczonych instruktorów.
      </p>
    </div>
    <div class={benefitCardClass}>
      <h3 class="text-2xl font-semibold text-blue-600 mt-0 mb-2">Społeczność profesjonalistów</h3>
      <p class="mb-0">
        Poznaj innych testerów, wymieniaj się doświadczeniami i buduj sieć zawodowych kontaktów.
      </p>
    </div>
    <div class={benefitCardClass}>
      <h3 class="text-2xl font-semibold text-blue-600 mt-0 mb-2">Najnowsze trendy</h3>
      <p class="mb-0">
        Bądź na bieżąco z najnowszymi trendami i praktykami w testowaniu oprogramowania.
      </p>
    </div>
    <div class={benefitCardClass}>
      <h3 class="text-2xl font-semibold text-blue-600 mt-0 mb-2">Wsparcie zawodowe</h3>
      <p class="mb-0">
        Otrzymuj wsparcie w rozwijaniu Twojej kariery w branży testowania oprogramowania.
      </p>
    </div>
  </div>

  <div class="bg-gray-100 p-8 rounded-lg mt-8 text-center">
    <h3 class="text-2xl font-semibold text-blue-900 mt-0 mb-2">Jak dołączyć?</h3>
    <p class="mb-4">
      Aby dołączyć do nas, pobierz, wypełnij i podpisz (podpisem elektronicznym lub jako skan)
      deklarację członkowską oraz deklarację o zachowaniu poufności (NDA), a następnie wyślij do
      nas oba dokumenty.
    </p>
    <p class="mb-4">
      <a
        // eslint-disable-next-line svelte/no-navigation-without-resolve
        href="documents/deklaracjaCzlonkowska_PQB.docx"
        target="_blank"
        rel="noopener noreferrer"
        class={btnPrimary}
        data-testid="download-membership-declaration"
        download
      >
        📄 Pobierz i wypełnij deklarację członkowską
      </a>
    </p>
    <p class="mb-4">
      <a
        // eslint-disable-next-line svelte/no-navigation-without-resolve
        href="documents/deklaracjaNDA_PQB.docx"
        target="_blank"
        rel="noopener noreferrer"
        class={btnPrimary}
        data-testid="download-nda-declaration"
        download
      >
        📄 Pobierz i wypełnij deklarację o zachowaniu poufności (NDA)
      </a>
    </p>
    <p class="mb-0">
      Po wypełnieniu dokumentów wyślij ją na adres email:
      <a
        href="mailto:info@pqb.org.pl?subject=Deklaracja%20cz%C5%82onkowska"
        class="text-blue-600 no-underline transition-colors duration-300 hover:text-orange-500"
        >info@pqb.org.pl</a
      >
    </p>
  </div>
</section>
