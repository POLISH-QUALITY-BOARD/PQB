<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Materials from '$lib/components/sections/AccreditationRegistry/Materials.svelte';
  import Providers from '$lib/components/sections/AccreditationRegistry/Providers.svelte';
  import Trainers from '$lib/components/sections/AccreditationRegistry/Trainers.svelte';
  import {
    accreditationRegistry,
    accreditationRegistryMaterials as materials,
    accreditationRegistryProviders as providers,
    accreditationRegistryTrainers as trainers
  } from '$velite';

  const { body, certifications } = accreditationRegistry;

  const certLabels = Object.fromEntries(certifications.map(({ code, label }) => [code, label]));
</script>

<Section level={1} class="bg-white">
  {#snippet heading()}{accreditationRegistry.heading}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-600 mb-14">{@html body}</div>

  <Trainers {...trainers} {certifications} {certLabels} />
  <Providers {...providers} {certifications} {certLabels} />
  <Materials {...materials} />
</Section>
