<script lang="ts">
  import type { Hero } from '$velite';
  import IconChevronDown from '~icons/mdi/chevron-down';

  let { logo, learnMoreLink, body, compact = false }: Hero & { compact?: boolean } = $props();
</script>

{#if compact}
  <div class="hero-compact text-white" data-testid="hero">
    <div class="max-w-270 mx-auto px-6 py-8">
      <p class="text-base text-white/70 font-light leading-relaxed m-0">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html body}
      </p>
    </div>
  </div>
{:else}
  <section class="hero overflow-hidden text-white" data-testid="hero">
    <div
      class="hero-body max-w-270 mx-auto px-6 text-center flex flex-col items-center justify-center"
    >
      <enhanced:img
        src="$lib/assets/logo.webp"
        alt={logo.alt}
        class="mx-auto mb-6 h-32 sm:h-40 md:h-52 w-auto"
        fetchpriority="high"
      />

      <h1 class="text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html body}
      </h1>

      <!-- eslint-disable svelte/no-navigation-without-resolve -->
      <a
        href={learnMoreLink.href}
        class="mt-24 flex flex-col items-center gap-2 text-white/50 hover:text-white/70 no-underline"
      >
        <span class="learn-more-link uppercase">{learnMoreLink.text}</span>
        <IconChevronDown aria-hidden="true" class="w-4 h-4 motion-safe:animate-bounce" />
      </a>
      <!-- eslint-enable svelte/no-navigation-without-resolve -->
    </div>
  </section>
{/if}

<style>
  .hero,
  .hero-compact {
    background:
      radial-gradient(ellipse 100% 80% at 70% 120%, rgba(232, 28, 36, 0.18) 0%, transparent 60%),
      radial-gradient(ellipse 80% 60% at 20% -20%, rgba(255, 255, 255, 0.06) 0%, transparent 55%),
      linear-gradient(160deg, var(--color-primary) 0%, var(--color-primary-deeper) 100%);
  }

  .hero-body {
    min-height: calc(100vh - 70px - 2rem);
  }

  .learn-more-link {
    font-size: 10px;
    letter-spacing: 0.2em;
  }
</style>
