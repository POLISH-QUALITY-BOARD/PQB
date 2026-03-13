<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Polish Quality Board - organizacja zajmująca się certyfikacją ISTQB i testowaniem oprogramowania"
    />
    <title>PQB - Polish Quality Board</title>
    <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
    <link rel="canonical" href="https://www.pqb.org.pl/" />
    <meta
      name="robots"
      content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="PQB - Polish Quality Board" />
    <meta
      property="og:description"
      content="Polish Quality Board — certyfikacje ISTQB, szkolenia i rozwój jakości oprogramowania w Polsce."
    />
    <meta property="og:site_name" content="Polish Quality Board" />
    <meta property="og:locale" content="pl_PL" />
    <meta property="og:url" content="https://www.pqb.org.pl/" />
    <meta property="og:image" content="https://pqb.org.pl/images/PQB-logo.png" />
    <meta property="og:image:secure_url" content="https://pqb.org.pl/images/PQB-logo.png" />
    <meta property="og:image:width" content="640" />
    <meta property="og:image:height" content="360" />
    <meta property="og:image:type" content="image/png" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="PQB - Polish Quality Board" />
    <meta
      name="twitter:description"
      content="Polish Quality Board — certyfikacje ISTQB, szkolenia i rozwój jakości oprogramowania w Polsce."
    />
    <meta name="twitter:image" content="https://pqb.org.pl/images/PQB-logo.png" />

    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Non for Profit Organization",
        "name": "Polish Quality Board",
        "url": "https://www.pqb.org.pl/",
        "logo": "https://pqb.org.pl/images/PQB-logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/polish-quality-board-official/",
          "https://www.facebook.com/profile.php?id=61584071003505",
          "https://github.com/POLISH-QUALITY-BOARD/"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "info@pqb.org.pl",
            "contactType": "customer support",
            "availableLanguage": ["Polish", "English"]
          }
        ]
      }
    </script>
</svelte:head>

<Navbar />
<Hero />

{@render children()}

<Footer />
