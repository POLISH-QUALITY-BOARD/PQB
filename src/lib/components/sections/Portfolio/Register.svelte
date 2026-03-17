<script>
  import Icon from '@iconify/svelte';
</script>

<div>
  <h3 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
    <Icon icon="mdi:certificate-outline" width="16" height="16" />
    SCR Register
  </h3>
  <p class="text-sm text-gray-500 mb-4">Rejestr certyfikowanych specjalistów</p>
  <p class="text-sm text-gray-600 leading-relaxed mb-6">
    Publiczny rejestr certyfikowanych profesjonalistów. Pozwala sprawdzić ważność certyfikacji
    ISTQB® każdego testera lub specjalisty QA – z datą wydania i ważności.
  </p>
  <a
    href="https://scr.istqb.org/"
    target="_blank"
    rel="noopener noreferrer"
    class="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
  >
    <Icon icon="mdi:open-in-new" width="15" height="15" />
    Przejdź do rejestru
  </a>
</div>
