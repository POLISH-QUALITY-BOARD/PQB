<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import { page } from '$app/state';
  import type { JsonLd } from '$velite';

  let { '@type': type, memberOf, name, sameAs, contactPoint }: JsonLd = $props();

  const schema = $derived.by(() => {
    const { href: url } = new URL(resolve('/'), page.url.origin);
    const { href: logo } = new URL(asset('/images/pqb-logo.png'), page.url.origin);

    return {
      '@context': 'https://schema.org',
      '@type': type,
      memberOf,
      name,
      url,
      logo,
      sameAs,
      contactPoint
    };
  });
</script>

{#snippet jsonld(data: object)}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html `<script type="application/ld+json" data-testid="json-ld">${JSON.stringify(data)}</` +
    `script>`}
{/snippet}

{@render jsonld(schema)}
