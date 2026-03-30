<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib';

  let {
    class: className,
    children,
    title,
    ...restProps
  }: { class?: string; children: Snippet; title: Snippet; [key: string]: unknown } = $props();
</script>

<section class={cn('pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5', className)} {...restProps}>
  <div class="max-w-270 mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold text-primary leading-tight mb-14">
      {@render title()}
    </h2>
    {@render children()}
  </div>
</section>
