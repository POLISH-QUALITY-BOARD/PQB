<script lang="ts">
  import { asset } from '$app/paths';
  import { page } from '$app/state';
  import type { TwitterCard } from '$velite';

  let { title, description, image }: TwitterCard = $props();

  const twitter = $derived.by(() => {
    const { href: imageUrl } = new URL(asset('/images/pqb-logo.png'), page.url.origin);

    return {
      title,
      description,
      image: {
        url: imageUrl,
        alt: image.alt
      }
    };
  });
</script>

<meta data-testid="twitter-card" name="twitter:card" content="summary_large_image" />
<meta data-testid="twitter-title" name="twitter:title" content={twitter.title} />
<meta data-testid="twitter-description" name="twitter:description" content={twitter.description} />
<meta data-testid="twitter-image" name="twitter:image" content={twitter.image.url} />
<meta data-testid="twitter-image-alt" name="twitter:image:alt" content={twitter.image.alt} />
