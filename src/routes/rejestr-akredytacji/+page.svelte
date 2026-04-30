<script lang="ts">
  import AccreditationList from '$lib/components/sections/AccreditationList.svelte';
  import {
    accreditationList,
    accreditationListMaterials as materials,
    accreditationListProviders as providers,
    accreditationListTrainers as trainers
  } from '$velite';
</script>

<AccreditationList {...accreditationList} {trainers} {providers} {materials} />
