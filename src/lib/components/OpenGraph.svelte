<script lang="ts">
  import { page } from '$app/state';
  import { resolve, asset } from '$app/paths';

  let {
    image
  }: {
    image: { width?: string; height?: string };
  } = $props();

  const og = $derived.by(() => {
    const { href: url } = new URL(resolve('/'), page.url.origin);
    const { href: imageUrl } = new URL(asset('/images/PQB-logo.png'), page.url.origin);

    return {
      type: 'website',
      title: 'PQB - Polish Quality Board',
      description:
        'Polish Quality Board - certyfikacje ISTQB, szkolenia i rozwój jakości oprogramowania w Polsce.',
      siteName: 'Polish Quality Board',
      locale: 'pl_PL',
      url,
      image: {
        url: imageUrl,
        width: image.width,
        height: image.height,
        alt: 'PQB Logo'
      }
    };
  });
</script>

<svelte:head>
  <meta property="og:type" content={og.type} />
  <meta property="og:title" content={og.title} />
  <meta property="og:description" content={og.description} />
  <meta property="og:site_name" content={og.siteName} />
  <meta property="og:locale" content={og.locale} />
  <meta property="og:url" content={og.url} />
  <meta property="og:image" content={og.image.url} />
  <meta property="og:image:width" content={og.image.width} />
  <meta property="og:image:height" content={og.image.height} />
  <meta property="og:image:alt" content={og.image.alt} />
</svelte:head>
