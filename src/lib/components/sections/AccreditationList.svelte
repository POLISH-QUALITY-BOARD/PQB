<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import type {
    AccreditationList,
    AccreditationListMaterials as AccreditationListMaterialsType,
    AccreditationListProviders as AccreditationListProvidersType,
    AccreditationListTrainers as AccreditationListTrainersType
  } from '$velite';
  import Materials from './AccreditationList/Materials.svelte';
  import Providers from './AccreditationList/Providers.svelte';
  import Trainers from './AccreditationList/Trainers.svelte';

  let {
    heading: sectionHeading,
    body,
    certifications,
    trainers,
    providers,
    materials
  }: AccreditationList & {
    trainers: AccreditationListTrainersType;
    providers: AccreditationListProvidersType;
    materials: AccreditationListMaterialsType;
  } = $props();

  const certLabels = $derived(
    Object.fromEntries(certifications.map(({ code, label }) => [code, label]))
  );
</script>

<Section level={1} class="bg-white">
  {#snippet heading()}{sectionHeading}{/snippet}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="text-gray-600 mb-14">{@html body}</div>

  <Trainers {...trainers} {certifications} {certLabels} />
  <Providers {...providers} {certifications} {certLabels} />
  <Materials {...materials} />
</Section>
