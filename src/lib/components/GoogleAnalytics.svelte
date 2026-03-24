<script lang="ts">
  import { browser } from '$app/environment';
  import { PUBLIC_GA_ID } from '$env/static/public';

  if (browser) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', PUBLIC_GA_ID);
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://google-analytics.com" />
  <script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA_ID}"></script>
</svelte:head>
