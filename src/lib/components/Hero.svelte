<script>
  import logo from '$lib/assets/logo.webp';
</script>

<section
  class="relative overflow-hidden text-white"
  style="
    background:
      radial-gradient(ellipse 100% 80% at 70% 120%, rgba(232,28,36,0.18) 0%, transparent 60%),
      radial-gradient(ellipse 80% 60% at 20% -20%, rgba(255,255,255,0.06) 0%, transparent 55%),
      linear-gradient(160deg, #1a3f7a 0%, #0c1f40 100%);
  "
>
  <!-- Content -->
  <div
    class="relative z-10 max-w-270 mx-auto px-6 text-center flex flex-col items-center justify-center"
    style="min-height: calc(100vh - 70px)"
  >
    <img src={logo} alt="Polish Quality Board" class="mx-auto mb-6 h-32 sm:h-40 md:h-52 w-auto" />

    <p class="text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
      Polish Quality Board (PQB) jest krajową organizacją zajmującą się promocją testowania
      oprogramowania i rozwojem osób zainteresowanych jakością oprogramowania w Polsce.
    </p>

    <!-- Scroll indicator -->
    <a
      href="#onas"
      class="mt-24 flex flex-col items-center gap-2 text-white/50 hover:text-white/70 no-underline"
    >
      <span class="text-[10px] uppercase tracking-[0.2em]">Odkryj więcej</span>
      <svg
        class="w-4 h-4 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>
</section>
