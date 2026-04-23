<script lang="ts">
  import Article from '$lib/components/Article.svelte';
  import type { About } from '$velite';
  import type { Picture } from 'vite-imagetools';
  import IconLinkedin from '~icons/simple-icons/linkedin';

  let { board, body }: Pick<About, 'board' | 'body'> = $props();

  const assets = import.meta.glob<{ default: Picture }>('/src/lib/assets/**/*', {
    eager: true,
    query: '?enhanced'
  });
</script>

<Article level={3} id="sklad-osobowy-zarzadu" class="mb-12 pb-8 border-b border-gray-100">
  {#snippet heading()}{board.heading}{/snippet}

  <div class="text-gray-600 mb-10 space-y-4">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>

  <div class="mt-8">
    <!-- eslint-disable svelte/no-navigation-without-resolve -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-12">
      <div>
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">
          {board.board.label}
        </p>
        {#each board.board.members as person (person.name)}
          <div class="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
            <enhanced:img
              src={assets[person.image].default}
              alt={person.name}
              loading="lazy"
              class="w-18 h-18 rounded-full object-cover shrink-0"
            />
            <div class="min-w-0 grow">
              <p class="font-semibold text-primary text-base mb-0 leading-snug">
                {person.name}
              </p>
              <p class="text-sm text-gray-600 mb-0">{person.role}</p>
            </div>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn — ${person.name}`}
              class="shrink-0 text-gray-300 hover:text-primary no-underline"
            >
              <IconLinkedin aria-hidden="true" width="18" height="18" />
            </a>
          </div>
        {/each}
      </div>

      <div>
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">
          {board.committee.label}
        </p>
        {#each board.committee.members as person (person.name)}
          <div class="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
            <enhanced:img
              src={assets[person.image].default}
              alt={person.name}
              loading="lazy"
              class="w-18 h-18 rounded-full object-cover shrink-0"
            />
            <div class="min-w-0 grow">
              <p class="font-semibold text-primary text-base mb-0 leading-snug">
                {person.name}
              </p>
              <p class="text-sm text-gray-600 mb-0">{person.role}</p>
            </div>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn — ${person.name}`}
              class="shrink-0 text-gray-300 hover:text-primary no-underline"
            >
              <IconLinkedin aria-hidden="true" width="18" height="18" />
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</Article>
