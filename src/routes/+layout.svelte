<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';

  import '../app.css';

  let { children } = $props();

  onMount(() => {
    const sectionIds = ['onas', 'portfolio', 'sylabusy', 'dolacz'];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            history.replaceState(null, '', `#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  });
</script>

<div class="text-gray-800 leading-relaxed bg-white">
  <Navbar />
  <Hero />

  {@render children()}

  <Footer />
  <CookieConsent />
</div>
