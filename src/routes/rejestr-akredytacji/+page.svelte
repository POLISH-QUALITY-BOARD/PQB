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

  const { body } = accreditationRegistry;
</script>

<Section level={1} class="bg-white">
  {#snippet heading()}{accreditationRegistry.heading}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-600 mb-14">{@html body}</div>

  <Trainers {...trainers} />
  <Providers {...providers} />
  <Materials {...materials} />
</Section>
