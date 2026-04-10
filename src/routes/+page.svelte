<script lang="ts">
  import About from '$lib/components/sections/About.svelte';
  import Accreditation from '$lib/components/sections/Accreditation.svelte';
  import FeaturedContent from '$lib/components/sections/FeaturedContent.svelte';
  import Join from '$lib/components/sections/Join.svelte';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
  import Syllabi from '$lib/components/sections/Syllabi.svelte';
  import { featuredContent } from '$velite';
</script>

<About />
<Portfolio />
<Syllabi />
<Accreditation />
<FeaturedContent
  heading={featuredContent.heading}
  openButton={featuredContent.openButton}
  whitepapers={featuredContent.whitepapers}
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html featuredContent.body}
</FeaturedContent>
<Join />
