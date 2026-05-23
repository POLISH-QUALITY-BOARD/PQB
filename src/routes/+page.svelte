<script lang="ts">
  import About from '$lib/components/sections/About.svelte';
  import Accreditation from '$lib/components/sections/Accreditation.svelte';
  import FeaturedContent from '$lib/components/sections/FeaturedContent.svelte';
  import Join from '$lib/components/sections/Join.svelte';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
  import { about, accreditation, dictionary, featuredContent, join, portfolio, scr } from '$velite';
</script>

<About {...about} />
<Portfolio {...portfolio} {dictionary} {scr} />
<Accreditation {...accreditation} />
<FeaturedContent {...featuredContent} />
<Join {...join} />
