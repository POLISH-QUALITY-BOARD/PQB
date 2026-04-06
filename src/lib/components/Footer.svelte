<script lang="ts">
  import { base, resolve } from '$app/paths';
  import { resetCookieConsent } from '$lib/stores/cookieConsent';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconOpenInNew from '~icons/mdi/open-in-new';
  import IconEmailOutline from '~icons/mdi/email-outline';
  import IconMapMarkerOutline from '~icons/mdi/map-marker-outline';
  import IconLinkedin from '~icons/simple-icons/linkedin';
  import IconFacebook from '~icons/simple-icons/facebook';
  import IconGithub from '~icons/simple-icons/github';
  import IconDiscord from '~icons/simple-icons/discord';

  const navigationLinks = [
    { href: '/#onas', label: 'O nas' },
    { href: '/#portfolio', label: 'Portfolio ISTQB®' },
    { href: '/#sylabusy', label: 'Sylabusy' },
    { href: '/#dolacz', label: 'Dołącz do nas' }
  ] as const;

  const documentLinks = [
    {
      href: `${base}/documents/Statut_PQB.pdf`,
      label: 'Statut PQB (PL)',
      icon: IconFileDocumentOutline
    },
    {
      href: `${base}/documents/Statut_PQB_en-US.pdf`,
      label: 'Statutes of PQB (EN)',
      icon: IconFileDocumentOutline
    },
    {
      href: 'https://www.istqb.org/',
      label: 'ISTQB®',
      icon: IconOpenInNew
    }
  ];

  const contactItems = [
    {
      icon: IconEmailOutline,
      label: 'E-mail',
      content: 'info@pqb.org.pl',
      email: 'info@pqb.org.pl'
    },
    {
      icon: IconMapMarkerOutline,
      label: 'Wirtualne biuro',
      content: 'Bydgoszcz, Polska'
    }
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/polish-quality-board-official/',
      icon: IconLinkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61584071003505',
      icon: IconFacebook,
      label: 'Facebook'
    },
    {
      href: 'https://github.com/POLISH-QUALITY-BOARD/',
      icon: IconGithub,
      label: 'GitHub'
    },
    { href: 'https://discord.gg/dAPN73QDJ5', icon: IconDiscord, label: 'Discord' }
  ];
</script>

<footer class="bg-gray-50 border-t border-gray-200" data-testid="footer">
  <div class="max-w-270 mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div class="lg:col-span-1">
        <div class="mb-5">
          <enhanced:img src="$lib/assets/brand.webp" alt="PQB Logo" class="h-12 w-auto" />
        </div>
        <p class="text-sm text-gray-600 leading-relaxed mb-6">
          Polish Quality Board jest organizacją non-profit promującą testowanie oprogramowania i
          wspierającą rozwój specjalistów ds. jakości oprogramowania w Polsce.
        </p>
        <div class="flex gap-3">
          {#each socialLinks as { icon: Icon, href, label }, index (index)}
            <!-- eslint-disable svelte/no-navigation-without-resolve -->
            <a
              {href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              class="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white"
            >
              <Icon width="16" height="16" />
            </a>
            <!-- eslint-enable svelte/no-navigation-without-resolve -->
          {/each}
        </div>
      </div>

      <div>
        <p class="font-semibold text-gray-600 mb-5 text-xs uppercase tracking-widest">Nawigacja</p>
        <ul class="list-none m-0 p-0 flex flex-col gap-3">
          {#each navigationLinks as link, index (index)}
            <li>
              <a
                href={resolve(link.href)}
                class="text-sm text-gray-600 no-underline hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="font-semibold text-gray-600 mb-5 text-xs uppercase tracking-widest">Dokumenty</p>
        <ul class="list-none m-0 p-0 flex flex-col gap-3">
          {#each documentLinks as { icon: Icon, href, label }, index (index)}
            <li>
              <!-- eslint-disable svelte/no-navigation-without-resolve -->
              <a
                {href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-gray-600 no-underline inline-flex items-center gap-2 hover:text-primary"
              >
                <Icon width="14" height="14" class="shrink-0 text-accent" />
                {label}
              </a>
              <!-- eslint-enable svelte/no-navigation-without-resolve -->
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="font-semibold text-gray-600 mb-5 text-xs uppercase tracking-widest">Kontakt</p>
        <ul class="list-none m-0 p-0 flex flex-col gap-4">
          {#each contactItems as { icon: Icon, label, content, email }, index (index)}
            <li class="flex items-start gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5"
              >
                <Icon width="14" height="14" class="shrink-0 text-accent" />
              </div>
              <div>
                <p
                  class="font-semibold text-gray-600 text-xs uppercase tracking-widest mb-0.5 mt-0"
                >
                  {label}
                </p>
                {#if email}
                  <a
                    href="mailto:{email}"
                    class="text-sm text-gray-600 no-underline hover:text-primary"
                  >
                    {content}
                  </a>
                {:else}
                  <span class="text-sm text-gray-600">{content}</span>
                {/if}
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200 pt-8">
      <div
        class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600"
      >
        <p class="m-0">
          &copy; {new Date().getFullYear()} Polish Quality Board. Wszelkie prawa zastrzeżone.
        </p>
        <div class="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 items-center">
          <span>KRS: 0001200368</span>
          <span class="hidden sm:inline text-gray-300">|</span>
          <span>NIP: 5543040791</span>
          <span class="hidden sm:inline text-gray-300">|</span>
          <span>REGON: 543007740</span>
          <span class="hidden sm:inline text-gray-300">|</span>
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 no-underline hover:text-primary"
          >
            Polityka prywatności
          </a>
          <span class="hidden sm:inline text-gray-300">|</span>
          <button
            onclick={resetCookieConsent}
            class="text-gray-600 hover:text-primary cursor-pointer bg-transparent border-0 p-0 text-xs"
            data-testid="footer-cookie-settings-button"
          >
            Ustawienia cookies
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>
