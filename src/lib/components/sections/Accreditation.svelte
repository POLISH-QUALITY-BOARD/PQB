<script lang="ts">
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { Accreditation } from '$velite';
  import IconCheck from '~icons/mdi/check';
  import IconDownload from '~icons/mdi/download';

  let { heading: headingText, body, articles, steps }: Accreditation = $props();

  let completed = $state<Record<number, boolean>>({});

  const complete = (index: number) => {
    completed[index] = true;
  };
</script>

<Section level={2} id="akredytacja" class="bg-gray-50">
  {#snippet heading()}{headingText}{/snippet}

  <div
    class="text-gray-600 mb-12 [&>p]:mb-4 [&>p]:last:mb-0 [&_a]:underline [&_a]:hover:text-primary"
  >
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      {#each articles as article (article.id)}
        <Article level={3} id={article.id}>
          {#snippet heading()}{article.heading}{/snippet}
          <p class="text-gray-600">{article.description}</p>
        </Article>
      {/each}
    </div>
    <div>
      <Article level={3} id="jak-uzyskac-akredytacje">
        {#snippet heading()}{steps.heading}{/snippet}

        <div class="relative">
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

          <div class="flex flex-col gap-10">
            {#each steps.items as { title, description, action }, i (title)}
              <div class="flex gap-6">
                <div
                  class="shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-bold flex items-center justify-center relative z-10 overflow-hidden"
                >
                  <span class="transition-opacity duration-300" class:opacity-0={completed[i]}
                    >{i + 1}</span
                  >
                  <span
                    class="absolute transition-opacity duration-300 opacity-0"
                    class:opacity-100={completed[i]}
                  >
                    <IconCheck width="20" height="20" />
                  </span>
                </div>
                <div class="pt-1.5">
                  <p class="text-base font-semibold text-primary mb-1">{title}</p>
                  <p class="text-sm text-gray-600" class:mb-5={action?.type === 'downloads'}>
                    {description}
                    {#if action?.type === 'email'}
                      <a
                        href="mailto:{action.address}"
                        class="font-semibold text-primary"
                        onclick={() => complete(i)}>{action.address}</a
                      >
                    {/if}
                  </p>
                  {#if action?.type === 'downloads'}
                    <div class="flex flex-col gap-3">
                      {#each action.downloads ?? [] as { label, href, testId } (testId)}
                        <!-- eslint-disable svelte/no-navigation-without-resolve -->
                        <a
                          {href}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
                          data-testid={testId}
                          download
                          onclick={() => complete(i)}
                        >
                          <IconDownload width="15" height="15" />
                          {label}
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </Article>
    </div>
  </div>
</Section>
