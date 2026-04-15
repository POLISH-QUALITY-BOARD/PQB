<script lang="ts">
  import { base } from '$app/paths';
  import Article from '$lib/components/Article.svelte';
  import Feature from '$lib/components/Feature.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { Join } from '$velite';
  import IconAccountGroupOutline from '~icons/mdi/account-group-outline';
  import IconCertificateOutline from '~icons/mdi/certificate-outline';
  import IconCheck from '~icons/mdi/check';
  import IconDownload from '~icons/mdi/download';
  import IconHandshakeOutline from '~icons/mdi/handshake-outline';
  import IconTrendingUp from '~icons/mdi/trending-up';

  let { heading: headingTitle, benefits, steps, body }: Join = $props();

  const richBenefits = $derived([
    {
      icon: IconCertificateOutline,
      heading: benefits.trainings.heading,
      description: benefits.trainings.description
    },
    {
      icon: IconAccountGroupOutline,
      heading: benefits.community.heading,
      description: benefits.community.description
    },
    {
      icon: IconTrendingUp,
      heading: benefits.trends.heading,
      description: benefits.trends.description
    },
    {
      icon: IconHandshakeOutline,
      heading: benefits.support.heading,
      description: benefits.support.description
    }
  ]);

  const richSteps = $derived([
    {
      heading: steps.downloadMembershipDeclaration.heading,
      description: steps.downloadMembershipDeclaration.description,
      action: {
        type: 'download',
        href: steps.downloadMembershipDeclaration.action.href,
        text: steps.downloadMembershipDeclaration.action.text,
        testId: 'download-membership-declaration-button'
      }
    },
    {
      heading: steps.downloadNdaDeclaration.heading,
      description: steps.downloadNdaDeclaration.description,
      action: {
        type: 'download',
        href: steps.downloadNdaDeclaration.action.href,
        text: steps.downloadNdaDeclaration.action.text,
        testId: 'download-nda-declaration-button'
      }
    },
    {
      heading: steps.sendDocuments.heading,
      description: steps.sendDocuments.description,
      action: { type: 'email', address: steps.sendDocuments.action.address }
    }
  ]);

  let completed = $derived(richSteps.map(() => false));

  const complete = (index: number) => {
    completed[index] = true;
  };
</script>

<Section level={2} id="dolacz-do-nas" class="bg-gray-50">
  {#snippet heading()}{headingTitle}{/snippet}

  <div class="text-gray-600 mb-10 space-y-4">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html body}
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
    {#each richBenefits as { icon, heading: benefitTitle, description }, i (i)}
      <Feature {icon}>
        {#snippet heading()}{benefitTitle}{/snippet}
        {description}
      </Feature>
    {/each}
  </div>

  <Article level={3}>
    {#snippet heading()}{steps.heading}{/snippet}

    <div class="relative">
      <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

      <div class="flex flex-col gap-10">
        {#each richSteps as { heading, description, action }, i (i)}
          <div class="flex gap-6">
            <div
              class="shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 text-sm font-bold flex items-center justify-center relative z-10 overflow-hidden"
            >
              <span class="transition-opacity duration-300" class:opacity-0={completed[i]}
                >{i + 1}</span
              >
              <span
                class="absolute transition-opacity duration-300 opacity-0"
                class:opacity-100={completed[i]}
              >
                <IconCheck aria-hidden="true" width="20" height="20" />
              </span>
            </div>
            <div class="pt-1.5">
              <p class="text-base font-semibold text-primary mb-1">{heading}</p>
              <p class="text-sm text-gray-600" class:mb-5={action.type === 'download'}>
                {description}
                {#if action.type === 'email'}
                  <a
                    href="mailto:{action.address}"
                    class="font-semibold text-primary"
                    onclick={() => complete(i)}>{action.address}</a
                  >
                {/if}
              </p>
              {#if action.type === 'download'}
                <!-- eslint-disable svelte/no-navigation-without-resolve -->
                <a
                  href={base + action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark pl-3.5 pr-5 py-2.5 rounded-xl no-underline"
                  data-testid={action.testId}
                  download
                  onclick={() => complete(i)}
                >
                  <IconDownload aria-hidden="true" width="16" height="16" />
                  {action.text}
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </Article>
</Section>
