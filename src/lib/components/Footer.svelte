<script>
  import Icon from '@iconify/svelte';
  import { base } from '$app/paths';
</script>

<footer class="bg-white border-t border-gray-300/50 mt-8 py-8">
  <div class="max-w-300 mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div class="flex flex-col">
        <div class="flex items-center gap-3 mb-4">
          <img src="{base}/images/PQB-logo.png" alt="PQB Logo" class="h-12.5 w-auto" />
          <span class="block font-semibold text-base text-gray-800">Polish Quality Board</span>
        </div>
        <p class="text-sm text-gray-500 leading-relaxed max-w-88 mb-0">
          Polish Quality Board - jest organizacją non-profit zajmującą się promocją testowania
          oprogramowania i rozwojem osób zainteresowanych jakością oprogramowania w Polsce.
        </p>
      </div>

      <div class="flex flex-col">
        <h4 class="font-semibold text-gray-800 mb-4 text-base mt-0">Nawigacja</h4>
        <ul class="list-none flex flex-col gap-2 m-0 p-0">
          <li>
            <a
              href="#onas"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
              >O nas</a
            >
          </li>
          <li>
            <a
              href="#portfolio"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
              >Portfolio ISTQB</a
            >
          </li>
          <li>
            <a
              href="#dolacz"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
              >Dołącz do nas</a
            >
          </li>
          <li>
            <a
              href="#kontakt"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
              >Kontakt</a
            >
          </li>
        </ul>
      </div>

      <div class="flex flex-col">
        <h4 class="font-semibold text-gray-800 mb-4 text-base mt-0">Dokumenty</h4>
        <ul class="list-none flex flex-col gap-2 m-0 p-0">
          <li>
            <a
              href="{base}/documents/Statut_PQB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
            >
              <Icon icon="mdi:file-document-outline" width="16" height="16" />
              Statut PQB (PL)
            </a>
          </li>
          <li>
            <a
              href="{base}/documents/Statut_PQB_en-US.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
            >
              <Icon icon="mdi:file-document-outline" width="16" height="16" />
              Statutes of PQB (EN)
            </a>
          </li>
          <li>
            <a
              href="https://www.istqb.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-gray-500 no-underline inline-flex items-center gap-1 transition-colors duration-300 hover:text-blue-600"
            >
              <Icon icon="mdi:open-in-new" width="16" height="16" />
              ISTQB International
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="pt-8 border-t border-gray-300/50 flex flex-col gap-4 items-center text-center">
      <p class="text-sm text-gray-500 flex flex-wrap justify-between items-center gap-4 m-0 w-full">
        &copy; 2026 Polish Quality Board. Wszelkie prawa zastrzeżone.
        <span class="inline-flex flex-wrap gap-2 text-sm text-gray-500 ml-auto">
          <span>KRS: 0001200368</span><span>•</span><span>NIP: 5543040791</span><span>•</span><span
            >REGON: 543007740</span
          ><span>•</span><a
            href="https://docs.github.com/en/site-policy/privacy-policies"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 no-underline hover:text-blue-600 transition-colors duration-300"
            >Polityka prywatności</a
          >
        </span>
      </p>
    </div>
  </div>
</footer>
