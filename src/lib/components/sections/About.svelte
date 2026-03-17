<script>
  import Board from './About/Board.svelte';
  import Statutes from './About/Statutes.svelte';
  import Values from './About/Values.svelte';
</script>

<section id="onas" class="bg-white pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5">
  <div class="max-w-270 mx-auto px-6">
    <div class="mb-14">
      <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight">O nas</h2>
    </div>

    <Board />
    <Statutes />
    <Values />
  </div>
</section>
