<script lang="ts">
  import { asset } from '$app/paths';
  import { page } from '$app/state';

  const twitter = $derived.by(() => {
    const { href: imageUrl } = new URL(asset('/images/pqb-logo.png'), page.url.origin);

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

<meta data-testid="twitter-card" name="twitter:card" content={twitter.card} />
<meta data-testid="twitter-title" name="twitter:title" content={twitter.title} />
<meta data-testid="twitter-description" name="twitter:description" content={twitter.description} />
<meta data-testid="twitter-image" name="twitter:image" content={twitter.image.url} />
<meta data-testid="twitter-image-alt" name="twitter:image:alt" content={twitter.image.alt} />
