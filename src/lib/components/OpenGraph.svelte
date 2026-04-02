<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  let {
    image
  }: {
    image: { url: string; width?: string; height?: string };
  } = $props();

  const url = $derived(new URL(resolve('/'), page.url.origin).href);
</script>

<meta data-testid="og-type" property="og:type" content="website" />
<meta data-testid="og-title" property="og:title" content="PQB - Polish Quality Board" />
<meta
  data-testid="og-description"
  property="og:description"
  content="Polish Quality Board - certyfikacje ISTQB, szkolenia i rozwój jakości oprogramowania w Polsce."
/>
<meta data-testid="og-site-name" property="og:site_name" content="Polish Quality Board" />
<meta data-testid="og-locale" property="og:locale" content="pl_PL" />
<meta data-testid="og-url" property="og:url" content={url} />
<meta data-testid="og-image" property="og:image" content={image.url} />
<meta data-testid="og-image-width" property="og:image:width" content={image.width} />
<meta data-testid="og-image-height" property="og:image:height" content={image.height} />
<meta data-testid="og-image-alt" property="og:image:alt" content="PQB Logo" />
