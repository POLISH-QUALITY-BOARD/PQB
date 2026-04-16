<script lang="ts">
  import type { Dictionary } from '$velite';
  import IconBookOpenVariant from '~icons/mdi/book-open-variant';
  import IconOpenInNew from '~icons/mdi/open-in-new';

  let { heading, description, link, body }: Dictionary = $props();
</script>

<div>
  <h3 class="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
    <IconBookOpenVariant aria-hidden="true" width="16" height="16" />
    {heading}
  </h3>
  <p class="text-sm text-gray-600 mb-4">{description}</p>
  <div class="text-sm text-gray-600 leading-relaxed mb-6">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>
  <!-- eslint-disable svelte/no-navigation-without-resolve -->
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    class="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark no-underline hover:underline"
  >
    <IconOpenInNew aria-hidden="true" width="15" height="15" />
    {link.text}
  </a>
</div>
