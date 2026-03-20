<script>
  import { Tabs } from 'bits-ui';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconDownload from '~icons/mdi/download';
</script>

<article id="statut" class="mb-12 pb-8 border-b border-gray-100">
  <h3 class="text-2xl font-semibold leading-tight text-primary mt-0 mb-6">Statut</h3>

  <Tabs.Root value="pl" class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
    <!-- Tab bar -->
    <Tabs.List class="flex border-b border-gray-200 bg-gray-50">
      <Tabs.Trigger
        data-testid="statute-tab-pl"
        value="pl"
        class="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-gray-400 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-white cursor-pointer"
      >
        Polski
      </Tabs.Trigger>
      <Tabs.Trigger
        data-testid="statute-tab-en"
        value="en"
        class="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-gray-400 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-white cursor-pointer"
      >
        English
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="pl">
      <div class="p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div
          class="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
          style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
        >
          <IconFileDocumentOutline width="26" height="26" color="white" />
        </div>
        <div class="grow">
          <p class="font-semibold text-primary text-base mb-1">Statut PQB</p>
          <p class="text-sm text-gray-500 mb-0">
            Polska wersja statutu Polish Quality Board – dokument określający zasady działania
            organizacji.
          </p>
        </div>
        <a
          // eslint-disable-next-line svelte/no-navigation-without-resolve
          href="documents/Statut_PQB.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-3 rounded-xl no-underline"
          data-testid="download-statute-pl"
          download
        >
          <IconDownload width="16" height="16" />
          Pobierz
        </a>
      </div>
    </Tabs.Content>

    <Tabs.Content value="en">
      <div lang="en" class="p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div
          class="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
          style="background: linear-gradient(135deg, #1a3f7a 0%, #0c1f40 100%);"
        >
          <IconFileDocumentOutline width="26" height="26" color="white" />
        </div>
        <div class="grow">
          <p class="font-semibold text-primary text-base mb-1">Constitution of PQB</p>
          <p class="text-sm text-gray-500 mb-0">
            English version of the Statutes of the Polish Quality Board – the founding document of
            the organization.
          </p>
        </div>
        <a
          // eslint-disable-next-line svelte/no-navigation-without-resolve
          href="documents/Statut_PQB_en-US.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-3 rounded-xl no-underline"
          data-testid="download-statute-en"
          download
        >
          <IconDownload width="16" height="16" />
          Download
        </a>
      </div>
    </Tabs.Content>
  </Tabs.Root>
</article>
