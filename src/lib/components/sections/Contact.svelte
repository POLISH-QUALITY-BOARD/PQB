<script>
  import Icon from '@iconify/svelte';

  const contactCardClass =
    'bg-linear-to-br from-gray-100 to-gray-50 p-8 rounded-xl text-center border-t-4 border-t-blue-600 transition-all duration-300 shadow-sm hover:-translate-y-2 hover:shadow-xl';
  const socialCardClass =
    'flex flex-col items-center gap-3 p-6 bg-white rounded-xl border-2 border-transparent transition-all duration-300 no-underline text-blue-900 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 hover:shadow-lg [&>svg]:text-blue-600 hover:[&>svg]:text-orange-500';
</script>

<section id="kontakt" class="py-16 border-b border-gray-300 last:border-b-0">
  <h2
    class="text-3xl font-semibold leading-tight text-blue-600 border-b-4 border-orange-500 pb-2 mt-4 mb-2"
  >
    Kontakt
  </h2>

  <p class="text-lg text-gray-600 text-center max-w-150 mx-auto mt-6 mb-10">
    Skontaktuj się z nami! Poniżej znajdziesz wszystkie sposoby dotarcia do nas.
  </p>

  <div
    class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-10 mb-12"
  >
    <div class={contactCardClass}>
      <span class="text-5xl mb-6 block">📧</span>
      <h3 class="text-2xl font-semibold text-blue-900 mt-0 mb-4">Email</h3>
      <p class="mb-0">
        <a
          href="mailto:info@pqb.org.pl"
          class="font-semibold text-blue-600 no-underline transition-colors duration-300 hover:text-orange-500 wrap-break-word"
          >info@pqb.org.pl</a
        >
      </p>
    </div>

    <div class={contactCardClass}>
      <span class="text-5xl mb-6 block">🌐</span>
      <h3 class="text-2xl font-semibold text-blue-900 mt-0 mb-4">Strona Internetowa</h3>
      <p class="mb-0">
        <a
          href="https://pqb.org.pl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-blue-600 no-underline transition-colors duration-300 hover:text-orange-500 wrap-break-word"
          >pqb.org.pl</a
        >
      </p>
    </div>

    <div class={contactCardClass}>
      <span class="text-5xl mb-6 block">📍</span>
      <h3 class="text-2xl font-semibold text-blue-900 mt-0 mb-4">Wirtualne Biuro</h3>
      <p class="mb-0">Bydgoszcz, Polska</p>
    </div>
  </div>

  <div class="bg-gray-100 px-8 py-12 rounded-xl mt-10 mb-10 text-center">
    <h3 class="text-2xl font-semibold text-blue-900 mt-0 mb-8">Podążaj za nami</h3>
    <div class="flex justify-center gap-6 flex-wrap">
      <a
        href="https://www.linkedin.com/company/polish-quality-board-official/"
        target="_blank"
        rel="noopener noreferrer"
        class={socialCardClass}
      >
        <Icon icon="simple-icons:linkedin" width="32" height="32" />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61584071003505"
        target="_blank"
        rel="noopener noreferrer"
        class={socialCardClass}
      >
        <Icon icon="simple-icons:facebook" width="32" height="32" />
        <span>Facebook</span>
      </a>

      <a
        href="https://github.com/POLISH-QUALITY-BOARD/"
        target="_blank"
        rel="noopener noreferrer"
        class={socialCardClass}
      >
        <Icon icon="simple-icons:github" width="32" height="32" />
        <span>GitHub</span>
      </a>

      <a
        href="https://discord.gg/dAPN73QDJ5"
        target="_blank"
        rel="noopener noreferrer"
        class={socialCardClass}
      >
        <Icon icon="simple-icons:discord" width="32" height="32" />
        <span>Discord</span>
      </a>
    </div>
  </div>
</section>
