<script>
  import IconChevronDown from '~icons/mdi/chevron-down';
</script>

<section class="hero overflow-hidden text-white" data-testid="hero">
  <div
    class="hero-body max-w-270 mx-auto px-6 text-center flex flex-col items-center justify-center"
  >
    <enhanced:img
      src="$lib/assets/logo.webp"
      alt="Logo Polish Quality Board"
      class="mx-auto mb-6 h-32 sm:h-40 md:h-52 w-auto"
      fetchpriority="high"
    />

    <h1 class="text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
      Polish Quality Board (PQB) jest krajową organizacją zajmującą się promocją testowania
      oprogramowania i rozwojem osób zainteresowanych jakością oprogramowania w Polsce.
    </h1>

    <a
      href="#o-nas"
      class="mt-24 flex flex-col items-center gap-2 text-white/50 hover:text-white/70 no-underline"
    >
      <span class="learn-more-link uppercase">Odkryj więcej</span>
      <IconChevronDown aria-hidden="true" class="w-4 h-4 motion-safe:animate-bounce" />
    </a>
  </div>
</section>

<style>
  .hero {
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
