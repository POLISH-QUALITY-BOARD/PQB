<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Board from '$lib/components/sections/About/Board.svelte';
  import Statutes from '$lib/components/sections/About/Statutes.svelte';
  import Values from '$lib/components/sections/About/Values.svelte';
  import type { About } from '$velite';

  let { heading: headingText, board, body }: About = $props();
</script>

<Section level={2} id="o-nas" class="bg-white">
  {#snippet heading()}{headingText}{/snippet}

  <Board {board} {body} />
  <Statutes />
  <Values />
</Section>
