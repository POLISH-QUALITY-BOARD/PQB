<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';

  let { children } = $props();
</script>

<div class="text-gray-800 leading-relaxed bg-white">
  <Navbar />
  <Hero />

  {@render children()}

  <Footer />
</div>
