<script lang="ts">
  import { replaceState } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import Announcement from '$lib/components/Announcement.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import OpenGraph from '$lib/components/OpenGraph.svelte';
  import TwitterCard from '$lib/components/TwitterCard.svelte';
  import {
    announcement,
    cookieConsent,
    footer,
    hero,
    jsonLd,
    navbar,
    openGraph,
    twitterCard
  } from '$velite';
  import '../app.css';
  import { onMount } from 'svelte';

  let { children, data } = $props();

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (isIntersecting) {
            replaceState(resolve(`/#${target.id}`), page.state);
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
  <JsonLd {...jsonLd} />
  <OpenGraph {...{ ...openGraph, ...{ image: { ...openGraph.image, ...data.image } } }} />
  <TwitterCard {...twitterCard} />
</svelte:head>

<Announcement {...announcement} />
<Navbar {...navbar} />
<Hero {...hero} />

<main>
  {@render children()}
</main>

<Footer {...footer} />
<CookieConsent {...cookieConsent} />
