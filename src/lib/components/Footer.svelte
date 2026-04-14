<script lang="ts">
  import { base } from '$app/paths';
  import { resetCookieConsent } from '$lib/stores/cookieConsent';
  import type { Footer } from '$velite';
  import IconEmailOutline from '~icons/mdi/email-outline';
  import IconFileDocumentOutline from '~icons/mdi/file-document-outline';
  import IconMapMarkerOutline from '~icons/mdi/map-marker-outline';
  import IconDiscord from '~icons/simple-icons/discord';
  import IconFacebook from '~icons/simple-icons/facebook';
  import IconGithub from '~icons/simple-icons/github';
  import IconLinkedin from '~icons/simple-icons/linkedin';

  let {
    brand,
    navigation,
    documents,
    contact,
    social,
    copyright,
    additionalItems,
    privacyPolicy,
    cookieSettings,
    body
  }: Footer = $props();
</script>

<footer class="bg-gray-50 border-t border-gray-200" data-testid="footer">
  <div class="max-w-270 mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div class="lg:col-span-1">
        <div class="mb-5">
          <enhanced:img src="$lib/assets/brand.webp" alt={brand.alt} class="h-12 w-auto" />
        </div>
        <div class="text-sm text-gray-600 leading-relaxed mb-6">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          {@html body}
        </div>
        <div class="flex gap-3">
          <!-- eslint-disable svelte/no-navigation-without-resolve -->
          <a
            href={social.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.linkedin.ariaLabel}
            class="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white"
          >
            <IconLinkedin width="16" height="16" />
          </a>
          <a
            href={social.facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.facebook.ariaLabel}
            class="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white"
          >
            <IconFacebook width="16" height="16" />
          </a>
          <a
            href={social.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.github.ariaLabel}
            class="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white"
          >
            <IconGithub width="16" height="16" />
          </a>
          <a
            href={social.discord.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.discord.ariaLabel}
            class="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white"
          >
            <IconDiscord width="16" height="16" />
          </a>
          <!-- eslint-enable svelte/no-navigation-without-resolve -->
        </div>
      </div>

      <div>
        <p class="font-semibold text-gray-600 mb-5 text-xs uppercase tracking-widest">
          {navigation.label}
        </p>
        <ul class="list-none m-0 p-0 flex flex-col gap-3">
          {#each navigation.links as { href, text }, index (index)}
            <li>
              <!-- eslint-disable svelte/no-navigation-without-resolve -->
              <a href={base + href} class="text-sm text-gray-600 no-underline hover:text-primary">
                {text}
              </a>
              <!-- eslint-enable svelte/no-navigation-without-resolve -->
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="font-semibold text-gray-600 mb-5 text-xs uppercase tracking-widest">
          {documents.label}
        </p>
        <ul class="list-none m-0 p-0 flex flex-col gap-3">
          {#each documents.links as { href, text }, index (index)}
            <li>
              <!-- eslint-disable svelte/no-navigation-without-resolve -->
              <a
                href={base + href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-gray-600 no-underline inline-flex items-center gap-2 hover:text-primary"
              >
                <IconFileDocumentOutline width="14" height="14" class="shrink-0 text-accent" />
                {text}
              </a>
              <!-- eslint-enable svelte/no-navigation-without-resolve -->
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="font-semibold text-gray-600 mb-5 text-xs uppercase tracking-widest">
          {contact.label}
        </p>
        <ul class="list-none m-0 p-0 flex flex-col gap-4">
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5"
            >
              <IconEmailOutline width="14" height="14" class="shrink-0 text-accent" />
            </div>
            <div>
              <p class="font-semibold text-gray-600 text-xs uppercase tracking-widest mb-0.5 mt-0">
                {contact.email.label}
              </p>
              <a
                href="mailto:{contact.email.address}"
                class="text-sm text-gray-600 no-underline hover:text-primary"
              >
                {contact.email.address}
              </a>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <div
              class="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 mt-0.5"
            >
              <IconMapMarkerOutline width="14" height="14" class="shrink-0 text-accent" />
            </div>
            <div>
              <p class="font-semibold text-gray-600 text-xs uppercase tracking-widest mb-0.5 mt-0">
                {contact.office.label}
              </p>
              <span class="text-sm text-gray-600">{contact.office.address}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200 pt-8">
      <div
        class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600"
      >
        <p class="m-0">
          &copy; {new Date().getFullYear()}
          {copyright}
        </p>
        <div class="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 items-center">
          {#each additionalItems as additionalItem, index (index)}
            <span>{additionalItem}</span>
            <span class="hidden sm:inline text-gray-300">|</span>
          {/each}
          <a
            // eslint-disable-next-line svelte/no-navigation-without-resolve
            href={privacyPolicy.href}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 no-underline hover:text-primary"
          >
            {privacyPolicy.text}
          </a>
          <span class="hidden sm:inline text-gray-300">|</span>
          <button
            onclick={resetCookieConsent}
            class="text-gray-600 hover:text-primary cursor-pointer bg-transparent border-0 p-0 text-xs"
            data-testid="footer-cookie-settings-button"
          >
            {cookieSettings.text}
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>
