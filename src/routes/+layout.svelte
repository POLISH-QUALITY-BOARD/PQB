<script lang="ts">
  import { replaceState } from '$app/navigation';
  import { page } from '$app/state';
  import Announcement from '$lib/components/Announcement.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import OpenGraph from '$lib/components/OpenGraph.svelte';
  import TwitterCard from '$lib/components/TwitterCard.svelte';
  import { cookieConsent, navbar } from '$velite';
  import '../app.css';
  import { onMount } from 'svelte';

  let { children, data } = $props();

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (isIntersecting) {
            // eslint-disable-next-line svelte/no-navigation-without-resolve
            replaceState(`#${target.id}`, page.state);
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <JsonLd />
  <OpenGraph image={data.image} />
  <TwitterCard />
</svelte:head>

<Announcement />
<Navbar {...navbar} />
<Hero />

<main>
  {@render children()}
</main>

<Footer />
<CookieConsent
  ariaLabel={cookieConsent.ariaLabel}
  acceptButton={cookieConsent.acceptButton}
  denyButton={cookieConsent.denyButton}
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html cookieConsent.body}
</CookieConsent>
