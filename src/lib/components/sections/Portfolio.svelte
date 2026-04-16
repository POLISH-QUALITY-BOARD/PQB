<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Dictionary from '$lib/components/sections/Portfolio/Dictionary.svelte';
  import Register from '$lib/components/sections/Portfolio/SCR.svelte';
  import type { Dictionary as DictionaryData, Portfolio, Scr } from '$velite';

  let {
    heading: headingTitle,
    anchor,
    body,
    dictionary,
    scr
  }: Portfolio & {
    dictionary: DictionaryData;
    scr: Scr;
  } = $props();
</script>

<Section id="portfolio-istqb" class="bg-gray-50">
  {#snippet heading()}{headingTitle}{/snippet}

  <div class="text-gray-600 mb-10 space-y-4">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>

  <a
    href="https://www.istqb.org/"
    target="_blank"
    rel="noopener noreferrer"
    title={anchor.title}
    class="block w-full mb-12"
  >
    <img
      src="images/istqb-02-12-26-full-name-portfolio-graphic.svg"
      alt={anchor.image.alt}
      class="w-full h-auto block object-contain max-h-96"
    />
  </a>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
    <Dictionary {...dictionary} />
    <Register {...scr} />
  </div>
</Section>
