<script lang="ts">
  import About from '$lib/components/sections/About.svelte';
  import Accreditation from '$lib/components/sections/Accreditation.svelte';
  import FeaturedContent from '$lib/components/sections/FeaturedContent.svelte';
  import Join from '$lib/components/sections/Join.svelte';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
  import Syllabi from '$lib/components/sections/Syllabi.svelte';
  import { dictionary, featuredContent, join, portfolio, scr, syllabi } from '$velite';
</script>

<About />
<Portfolio {...portfolio} {dictionary} {scr} />
<Syllabi {...syllabi} />
<Accreditation />
<FeaturedContent {...featuredContent} />
<Join {...join} />
