<script lang="ts">
  import { asset } from '$app/paths';
  import { page } from '$app/state';

  const twitter = $derived.by(() => {
    const { href: imageUrl } = new URL(asset('/images/PQB-logo.png'), page.url.origin);

    return {
      card: 'summary_large_image',
      title: 'PQB - Polish Quality Board',
      description:
        'Polish Quality Board - certyfikacje ISTQB, szkolenia i rozwój jakości oprogramowania w Polsce.',
      image: {
        url: imageUrl,
        alt: 'PQB Logo'
      }
    };
  });
</script>

<svelte:head>
  <meta name="twitter:card" content={twitter.card} />
  <meta name="twitter:title" content={twitter.title} />
  <meta name="twitter:description" content={twitter.description} />
  <meta name="twitter:image" content={twitter.image.url} />
  <meta name="twitter:image:alt" content={twitter.image.alt} />
</svelte:head>
