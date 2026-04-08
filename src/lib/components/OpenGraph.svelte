<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import { page } from '$app/state';

  let {
    image
  }: {
    image: { width?: string; height?: string };
  } = $props();

  const og = $derived.by(() => {
    const { href: url } = new URL(resolve('/'), page.url.origin);
    const { href: imageUrl } = new URL(asset('/images/pqb-logo.png'), page.url.origin);

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

<meta data-testid="og-type" property="og:type" content={og.type} />
<meta data-testid="og-title" property="og:title" content={og.title} />
<meta data-testid="og-description" property="og:description" content={og.description} />
<meta data-testid="og-site-name" property="og:site_name" content={og.siteName} />
<meta data-testid="og-locale" property="og:locale" content={og.locale} />
<meta data-testid="og-url" property="og:url" content={og.url} />
<meta data-testid="og-image" property="og:image" content={og.image.url} />
<meta data-testid="og-image-width" property="og:image:width" content={og.image.width} />
<meta data-testid="og-image-height" property="og:image:height" content={og.image.height} />
<meta data-testid="og-image-alt" property="og:image:alt" content={og.image.alt} />
