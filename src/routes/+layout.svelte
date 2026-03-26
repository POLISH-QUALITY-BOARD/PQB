<script lang="ts">
  import { onMount } from 'svelte';
  import OpenGraph from '$lib/components/OpenGraph.svelte';
  import TwitterCard from '$lib/components/TwitterCard.svelte';
  import Announcement from '$lib/components/Announcement.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';

  import '../app.css';

  let { children, data } = $props();

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (isIntersecting) {
            history.replaceState(null, '', `#${target.id}`);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<OpenGraph image={data.image} />
<TwitterCard />

<div class="text-gray-800 leading-relaxed bg-white">
  <Announcement />
  <Navbar />
  <Hero />
</div>

<main>
  {@render children()}
</main>

<Footer />
<CookieConsent />
