<script lang="ts">
  import { cn } from '$lib';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    children,
    class: className,
    heading,
    subheading,
    level,
    ...restProps
  }: {
    children: Snippet;
    heading: Snippet;
    subheading?: Snippet;
    level: 2 | 3;
  } & HTMLAttributes<HTMLElement> = $props();
</script>

<article class={cn('mb-8 pb-6 scroll-mt-25', className)} data-testid="article" {...restProps}>
  <svelte:element
    this={`h${level}`}
    class={cn(
      'text-2xl font-semibold leading-tight text-primary mt-0',
      subheading ? 'mb-2' : 'mb-6'
    )}
    data-testid="article-heading"
  >
    {@render heading()}
  </svelte:element>

  {#if subheading}
    <p class="text-gray-600 mb-10" data-testid="article-subheading">
      {@render subheading()}
    </p>
  {/if}

  <div data-testid="article-body">
    {@render children()}
  </div>
</article>
