<script>
  import Icon from '@iconify/svelte';
  import { base } from '$app/paths';

  const navLinks = [
    { href: '#onas', label: 'O nas' },
    { href: '#portfolio', label: 'Portfolio ISTQB' },
    { href: '#sylabusy', label: 'Sylabusy' },
    { href: '#dolacz', label: 'Dołącz do nas' },
  ];

  const docLinks = [
    { href: `${base}/documents/Statut_PQB.pdf`, label: 'Statut PQB (PL)', icon: 'mdi:file-document-outline', external: true },
    { href: `${base}/documents/Statut_PQB_en-US.pdf`, label: 'Statutes of PQB (EN)', icon: 'mdi:file-document-outline', external: true },
    { href: 'https://www.istqb.org/', label: 'ISTQB International', icon: 'mdi:open-in-new', external: true },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/polish-quality-board-official/', icon: 'simple-icons:linkedin', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/profile.php?id=61584071003505', icon: 'simple-icons:facebook', label: 'Facebook' },
    { href: 'https://github.com/POLISH-QUALITY-BOARD/', icon: 'simple-icons:github', label: 'GitHub' },
    { href: 'https://discord.gg/dAPN73QDJ5', icon: 'simple-icons:discord', label: 'Discord' },
  ];
</script>

<footer class="bg-gray-50 border-t border-gray-200">

  <div class="max-w-270 mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

      <!-- Brand column -->
      <div class="lg:col-span-1">
        <div class="mb-5">
          <img src="{base}/images/PQB-logo.png" alt="PQB Logo" class="h-12 w-auto" />
        </div>
        <p class="text-sm text-gray-500 leading-relaxed mb-6">
          Organizacja non-profit promująca testowanie oprogramowania i wspierająca rozwój specjalistów
          ds. jakości oprogramowania w Polsce.
        </p>
        <div class="flex gap-3">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              class="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#1a3f7a] hover:text-white"
            >
              <Icon icon={social.icon} width="16" height="16" />
            </a>
          {/each}
        </div>
      </div>

      <!-- Navigation column -->
      <div>
        <h4 class="font-semibold text-gray-500 mb-5 text-xs uppercase tracking-widest">Nawigacja</h4>
        <ul class="list-none m-0 p-0 flex flex-col gap-3">
          {#each navLinks as link}
            <li>
              <a href={link.href} class="text-sm text-gray-500 no-underline transition-colors hover:text-[#1a3f7a]">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Documents column -->
      <div>
        <h4 class="font-semibold text-gray-500 mb-5 text-xs uppercase tracking-widest">Dokumenty</h4>
        <ul class="list-none m-0 p-0 flex flex-col gap-3">
          {#each docLinks as link}
            <li>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                class="text-sm text-gray-500 no-underline inline-flex items-center gap-2 transition-colors hover:text-[#1a3f7a]"
              >
                <Icon icon={link.icon} width="14" height="14" class="shrink-0 opacity-70" />
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact column -->
      <div>
        <h4 class="font-semibold text-gray-500 mb-5 text-xs uppercase tracking-widest">Kontakt</h4>
        <ul class="list-none m-0 p-0 flex flex-col gap-4">
          <li class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
              <Icon icon="mdi:email-outline" width="15" height="15" class="text-[#e81c24]" />
            </div>
            <div>
              <p class="font-semibold text-gray-500 text-[10px] uppercase tracking-widest mb-0.5 mt-0">Email</p>
              <a href="mailto:info@pqb.org.pl" class="text-sm text-gray-600 no-underline hover:text-[#1a3f7a]">
                info@pqb.org.pl
              </a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
              <Icon icon="mdi:map-marker-outline" width="15" height="15" class="text-[#e81c24]" />
            </div>
            <div>
              <p class="font-semibold text-gray-500 text-[10px] uppercase tracking-widest mb-0.5 mt-0">Lokalizacja</p>
              <span class="text-sm text-gray-600">Bydgoszcz, Polska</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-200 pt-8">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p class="m-0">&copy; 2026 Polish Quality Board. Wszelkie prawa zastrzeżone.</p>
        <div class="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 items-center">
          <span>KRS: 0001200368</span>
          <span class="hidden sm:inline opacity-30">|</span>
          <span>NIP: 5543040791</span>
          <span class="hidden sm:inline opacity-30">|</span>
          <span>REGON: 543007740</span>
          <span class="hidden sm:inline opacity-30">|</span>
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 no-underline hover:text-[#1a3f7a]"
          >
            Polityka prywatności
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
