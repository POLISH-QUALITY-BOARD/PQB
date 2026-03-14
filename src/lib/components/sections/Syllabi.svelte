<script>
  import { base } from '$app/paths';

  const linkClass =
    'text-blue-600 no-underline transition-colors duration-300 hover:text-orange-500';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section id="sylabusy" class="py-16 border-b border-gray-300 last:border-b-0">
  <h2
    class="text-3xl font-semibold leading-tight text-blue-600 border-b-4 border-orange-500 pb-2 mt-4 mb-2"
  >
    Sylabusy
  </h2>
  <p class="mb-4">Poniżej znajdziesz sylabusy, pytania, odpowiedzi i wytyczne do akredytacji:</p>
  <ul class="ml-4 pl-4 list-disc">
    <li class="mb-2">
      <strong>Certyfikowany Tester - Poziom Podstawowy v4.0.1</strong>
      <ul class="ml-4 pl-4 list-disc mt-1">
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-sylabus.pdf" download class={linkClass}>Sylabus</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-A-pytania-v1.7.pdf" download class={linkClass}>Pytania - zestaw A</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-A-odpowiedzi-v1.7.pdf" download class={linkClass}>Odpowiedzi - zestaw A</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-B-pytania-v1.7.pdf" download class={linkClass}>Pytania - zestaw B</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-B-odpowiedzi-v1.7.pdf" download class={linkClass}>Odpowiedzi - zestaw B</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-C-pytania-v1.6.pdf" download class={linkClass}>Pytania - zestaw C</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-C-odpowiedzi-v1.6.pdf" download class={linkClass}>Odpowiedzi - zestaw C</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-D-pytania-v1.5.pdf" download class={linkClass}>Pytania - zestaw D</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-zestaw-D-odpowiedzi-v1.5.pdf" download class={linkClass}>Odpowiedzi - zestaw D</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/fl-4.0.1/FL-4.0.1-PL-wytyczne-do-akredytacji-v0.3.pdf" download class={linkClass}>Wytyczne do akredytacji</a></li>
      </ul>
    </li>
    <li class="mb-2">
      <strong>Certyfikowany Tester - Poziom Zaawansowany - Analityk Testów v4.0</strong>
      <ul class="ml-4 pl-4 list-disc mt-1">
        <li class="mb-1"><a href="{base}/documents/syllabi/ta-4.0/TA-4.0-PL-sylabus.pdf" download class={linkClass}>Sylabus</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/ta-4.0/TA-4.0-PL-pytania.pdf" download class={linkClass}>Pytania</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/ta-4.0/TA-4.0-PL-odpowiedzi.pdf" download class={linkClass}>Odpowiedzi</a></li>
      </ul>
    </li>
    <li class="mb-2">
      <strong>Certyfikowany Tester - Poziom Zaawansowany - Zarządzanie Testami v3.0</strong>
      <ul class="ml-4 pl-4 list-disc mt-1">
        <li class="mb-1"><a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-sylabus.pdf" download class={linkClass}>Sylabus</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-pytania-v1.3.3.pdf" download class={linkClass}>Pytania</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-odpowiedzi-v1.3.3.pdf" download class={linkClass}>Odpowiedzi</a></li>
        <li class="mb-1"><a href="{base}/documents/syllabi/tm-3.0/TM-3.0-PL-wytyczne-do-akredytacji-v1.0.pdf" download class={linkClass}>Wytyczne do akredytacji</a></li>
      </ul>
    </li>
  </ul>
</section>
