<script lang="ts">
  import { page } from '$app/state';
  import { resolve, asset } from '$app/paths';
  import type { Organization, WithContext } from 'schema-dts';

  const schema = $derived.by(() => {
    const { href: url } = new URL(resolve('/'), page.url.origin);
    const { href: logo } = new URL(asset('/images/pqb-logo.png'), page.url.origin);

    return {
      '@context': 'https://schema.org',
      '@type': 'NGO',
      name: 'Polish Quality Board',
      url,
      logo,
      sameAs: [
        'https://www.linkedin.com/company/polish-quality-board-official/',
        'https://www.facebook.com/profile.php?id=61584071003505',
        'https://github.com/POLISH-QUALITY-BOARD/'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'info@pqb.org.pl',
          contactType: 'customer support',
          availableLanguage: ['Polish', 'English']
        }
      ]
    } satisfies WithContext<Organization>;
  });
</script>

{#snippet jsonld(data: object)}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html `<script type="application/ld+json" data-testid="json-ld">${JSON.stringify(data)}</` +
    `script>`}
{/snippet}

{@render jsonld(schema)}
