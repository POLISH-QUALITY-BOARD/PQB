<script lang="ts">
  import Announcement from '#lib/components/Announcement.svelte';
  import CookieConsent from '#lib/components/CookieConsent.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import Hero from '#lib/components/Hero.svelte';
  import JsonLd from '#lib/components/JsonLd.svelte';
  import Navbar from '#lib/components/Navbar.svelte';
  import OpenGraph from '#lib/components/OpenGraph.svelte';
  import TwitterCard from '#lib/components/TwitterCard.svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
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
  import { SvelteURL } from 'svelte/reactivity';

  let { children, data } = $props();

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { isIntersecting, target } of entries) {
          if (isIntersecting) {
            const url = new SvelteURL(page.url.href);
            url.hash = target.id;
            // eslint-disable-next-line svelte/no-navigation-without-resolve
            goto(url, { shallow: true, replace: true, state: page.state });
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
{#if page.url.pathname === resolve('/').slice(1)}
  <Hero {...hero} />
{/if}

<main>
  {@render children()}
</main>

<Footer {...footer} />
<CookieConsent {...cookieConsent} />
