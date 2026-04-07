<script>
  import Section from '$lib/components/Section.svelte';
  import Board from '$lib/components/sections/About/Board.svelte';
  import Statutes from '$lib/components/sections/About/Statutes.svelte';
  import Values from '$lib/components/sections/About/Values.svelte';
</script>

<Section id="o-nas" class="bg-white">
  {#snippet heading()}O nas{/snippet}

  <Board />
  <Statutes />
  <Values />
</Section>
