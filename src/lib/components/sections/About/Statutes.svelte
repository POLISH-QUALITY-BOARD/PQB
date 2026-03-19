<script>
  import { fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import { Tabs } from 'bits-ui';

  const tabs = [
    {
      trigger: { value: 'pl', title: 'Polski' },
      content: {
        title: 'Statut PQB',
        description:
          'Polska wersja statutu Polish Quality Board – dokument określający zasady działania organizacji.',
        lang: 'pl',
        download: {
          href: 'documents/Statut_PQB.pdf',
          text: 'Pobierz',
          testId: 'download-statute-pl'
        }
      }
    },
    {
      trigger: { value: 'en', title: 'English' },
      content: {
        title: 'Constitution of PQB',
        description:
          'English version of the Statutes of the Polish Quality Board – the founding document of the organization.',
        lang: 'en',
        download: {
          href: 'documents/Statut_PQB_en-US.pdf',
          text: 'Download',
          testId: 'download-statute-en'
        }
      }
    }
  ];

  let activeTab = $state('pl');
</script>

<article id="statut" class="mb-12 pb-8 border-b border-gray-100">
  <h3 class="text-2xl font-semibold leading-tight text-primary mt-0 mb-6">Statut</h3>

  <Tabs.Root
    bind:value={activeTab}
    class="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
  >
    <Tabs.List class="flex border-b border-gray-200 bg-gray-50">
      {#each tabs as { trigger } (trigger.value)}
        <Tabs.Trigger
          data-testid="statute-tab-{trigger.value}"
          value={trigger.value}
          class="flex items-center gap-2 px-6 py-4 text-sm font-semibold text-gray-400 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-white cursor-pointer transition-all duration-200"
        >
          {trigger.title}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each tabs as { trigger, content } (trigger.value)}
      <Tabs.Content value={trigger.value}>
        <div lang={content.lang} class="p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div
            class="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-linear-to-br from-primary to-primary-deeper"
          >
            <Icon icon="mdi:file-document-outline" width="26" height="26" color="white" />
          </div>
          {#key activeTab}
            <div in:fly class="flex-1 flex flex-col sm:flex-row sm:items-center gap-6">
              <div class="grow">
                <p class="font-semibold text-primary text-base mb-1">{content.title}</p>
                <p class="text-sm text-gray-500 mb-0">{content.description}</p>
              </div>
              <!-- eslint-disable svelte/no-navigation-without-resolve -->
              <a
                href={content.download.href}
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-3 rounded-xl no-underline"
                data-testid={content.download.testId}
                download
              >
                <Icon icon="mdi:download" width="16" height="16" />
                {content.download.text}
              </a>
            </div>
          {/key}
        </div>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</article>
