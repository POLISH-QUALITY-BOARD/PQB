<script lang="ts">
  import type { Component, Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib';

  interface Props {
    icon: Component;
    title: Snippet;
    children: Snippet;
  }

  let {
    icon: Icon,
    title,
    children,
    class: className,
    ...restProps
  }: Props & Omit<HTMLAttributes<HTMLDivElement>, 'title'> = $props();
</script>

<div class={cn('flex gap-5 items-start', className)} data-testid="feature" {...restProps}>
  <div
    class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm bg-linear-to-br from-primary to-primary-deeper"
    data-testid="feature-icon"
  >
    <Icon width="22" height="22" color="white" />
  </div>
  <div>
    <p class="text-base font-semibold text-primary mb-1" data-testid="feature-title">
      {@render title()}
    </p>
    <p class="text-sm text-gray-500 leading-relaxed" data-testid="feature-description">
      {@render children()}
    </p>
  </div>
</div>
