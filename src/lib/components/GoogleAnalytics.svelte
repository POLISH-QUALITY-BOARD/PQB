<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_GA_ID } from '$env/static/public';

  onMount(() => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }

    window.gtag = gtag;

    gtag('consent', 'default', {
      analytics_storage: 'denied'
    });

    gtag('js', new Date());
    gtag('config', PUBLIC_GA_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_ID}`;

    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://google-analytics.com" />
</svelte:head>
