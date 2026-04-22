<script lang="ts">
  import type { Announcement } from '$velite';

  let { body }: Announcement = $props();
</script>

<div class="bg-primary" data-testid="announcement">
  <div
    class="max-w-270 mx-auto px-6 py-2 text-xs font-medium text-gray-300 [&_a]:text-gray-300 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white [&_strong]:font-medium [&_strong]:text-white"
  >
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>
</div>
