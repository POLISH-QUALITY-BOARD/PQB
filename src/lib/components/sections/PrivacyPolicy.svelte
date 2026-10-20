<script lang="ts">
  import Section from '#lib/components/Section.svelte';
  import type { PrivacyPolicy } from '$velite';
  import IconTranslate from '~icons/mdi/translate';

  let {
    heading: headingText,
    languageSwitch,
    body,
    lang
  }: PrivacyPolicy & { lang: string } = $props();
</script>

<Section level={1} class="bg-white" {lang}>
  {#snippet heading()}{headingText}{/snippet}

  <!-- eslint-disable svelte/no-navigation-without-resolve -->
  <a
    href={languageSwitch.href}
    hreflang={languageSwitch.lang}
    lang={languageSwitch.lang}
    class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline mb-10"
  >
    <IconTranslate aria-hidden="true" width="16" height="16" />
    {languageSwitch.text}
  </a>

  <div
    class="max-w-3xl text-gray-700 leading-relaxed [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary-dark [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-25 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:mb-4 [&_ol]:mb-4 [&_li]:mb-1.5 [&_li>ul]:mt-1.5 [&_li>ol]:mt-1.5 [&_li>ul]:mb-0 [&_li>ol]:mb-0 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_table]:w-full [&_table]:text-sm [&_table]:mb-6 [&_th]:text-left [&_th]:font-semibold [&_th]:text-primary [&_th]:bg-gray-50 [&_th]:border [&_td]:border [&_th]:border-gray-200 [&_td]:border-gray-200 [&_th]:px-4 [&_td]:px-4 [&_th]:py-2 [&_td]:py-2 [&_hr]:my-10 [&_hr]:border-gray-200 [&>:first-child]:mt-0 [&>:last-child]:mb-0"
  >
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>
</Section>
