<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { privacyPolicy } from '$velite';

  const { heading: headingText, body } = privacyPolicy;
</script>

<Section level={1} class="bg-white">
  {#snippet heading()}{headingText}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-700 leading-relaxed [&>p]:mb-4 [&>p]:last:mb-0">{@html body}</div>
</Section>
