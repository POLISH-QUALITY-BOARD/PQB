<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { scrPage } from '$velite';
  import IconCheck from '~icons/mdi/check';
  import IconDownload from '~icons/mdi/download';

  const { heading: headingText, steps, body } = scrPage;

  let completed = $state<Record<number, boolean>>({});

  const complete = (index: number) => {
    completed[index] = true;
  };
</script>

<Section level={1} class="bg-white">
  {#snippet heading()}{headingText}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-700 leading-relaxed mb-12 [&>p]:mb-4 [&>p]:last:mb-0">{@html body}</div>

  <h2 class="text-2xl font-bold text-primary mb-8">{steps.heading}</h2>

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
            <div
              class="text-sm text-gray-600 [&>p]:inline [&_a]:font-semibold [&_a]:text-primary [&_a]:underline"
              class:mb-5={action?.type === 'downloads'}
            >
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html description}
              {#if action?.type === 'email'}
                <a
                  href="mailto:{action.address}"
                  class="font-semibold text-primary"
                  onclick={() => complete(i)}>{action.address}</a
                >
              {/if}
            </div>
            {#if action?.type === 'downloads'}
              <div class="flex flex-col gap-3">
                {#each action.downloads ?? [] as { label, href } (href)}
                  <!-- eslint-disable svelte/no-navigation-without-resolve -->
                  <a
                    {href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
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
</Section>
