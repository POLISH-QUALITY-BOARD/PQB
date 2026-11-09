<script lang="ts">
  import Section from '#lib/components/Section.svelte';
  import { wbtPoland2026Page } from '#velite';
</script>

<svelte:head>
  <title>{wbtPoland2026Page.heading}</title>
</svelte:head>

<Section level={1} class="bg-white">
  {#snippet heading()}{wbtPoland2026Page.heading}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-700 leading-relaxed mb-8">{@html wbtPoland2026Page.body}</div>

  <div class="aspect-video w-full overflow-hidden rounded-lg">
    <iframe
      class="w-full h-full"
      src="https://www.youtube-nocookie.com/embed/{wbtPoland2026Page.videoId}"
      title={wbtPoland2026Page.videoTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</Section>
