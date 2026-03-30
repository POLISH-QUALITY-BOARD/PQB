<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib';

  let {
    children,
    class: className,
    title,
    ...restProps
  }: { children: Snippet; class?: string; title: Snippet } & Record<string, unknown> = $props();
</script>

<section
  class={cn('pt-12 pb-20 md:pt-16 md:pb-28 scroll-mt-17.5', className)}
  data-testid="section"
  {...restProps}
>
  <div class="max-w-270 mx-auto px-6">
    <h2
      class="text-4xl md:text-5xl font-bold text-primary leading-tight mb-14"
      data-testid="section-title"
    >
      {@render title()}
    </h2>

    <div data-testid="section-body">
      {@render children()}
    </div>
  </div>
</section>
