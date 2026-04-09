import { defineCollection, defineConfig, s } from 'velite';

const navbar = defineCollection({
  name: 'Navbar',
  pattern: 'navbar.md',
  single: true,
  schema: s.object({
    brand: s.object({
      ariaLabel: s.string()
    }),
    navbarItems: s.array(
      s.object({
        href: s.string(),
        text: s.string(),
        children: s
          .array(
            s.object({
              href: s.string(),
              text: s.string()
            })
          )
          .optional()
      })
    ),
    joinUsButton: s.object({
      href: s.string(),
      text: s.string()
    })
  })
});

const hero = defineCollection({
  name: 'Hero',
  pattern: 'hero.md',
  single: true,
  schema: s.object({
    logo: s.object({
      alt: s.string()
    }),
    learnMoreLink: s.object({
      href: s.string(),
      text: s.string()
    }),
    body: s.markdown()
  })
});

const footer = defineCollection({
  name: 'Footer',
  pattern: 'footer.md',
  single: true,
  schema: s.object({
    brand: s.object({
      alt: s.string()
    }),
    body: s.markdown(),
    navigation: s.object({
      label: s.string(),
      links: s.array(
        s.object({
          href: s.string(),
          text: s.string()
        })
      )
    }),
    documents: s.object({
      label: s.string(),
      links: s.array(
        s.object({
          href: s.string(),
          text: s.string()
        })
      )
    }),
    contact: s.object({
      label: s.string(),
      email: s.object({
        label: s.string(),
        address: s.string()
      }),
      office: s.object({
        label: s.string(),
        address: s.string()
      })
    }),
    social: s.object({
      linkedin: s.object({
        ariaLabel: s.string(),
        href: s.string()
      }),
      facebook: s.object({
        ariaLabel: s.string(),
        href: s.string()
      }),
      github: s.object({
        ariaLabel: s.string(),
        href: s.string()
      }),
      discord: s.object({
        ariaLabel: s.string(),
        href: s.string()
      })
    }),
    additionalItems: s.array(s.string()),
    copyright: s.string(),
    privacyPolicy: s.object({
      href: s.string(),
      text: s.string()
    }),
    cookieSettings: s.object({
      text: s.string()
    })
  })
});

const cookieConsent = defineCollection({
  name: 'CookieConsent',
  pattern: 'cookie-consent.md',
  single: true,
  schema: s.object({
    ariaLabel: s.string(),
    acceptButton: s.object({
      ariaLabel: s.string(),
      text: s.string()
    }),
    denyButton: s.object({
      ariaLabel: s.string(),
      text: s.string()
    }),
    body: s.markdown()
  })
});

const twitterCard = defineCollection({
  name: 'TwitterCard',
  pattern: 'twitter-card.md',
  single: true,
  schema: s.object({
    card: s.string(),
    title: s.string(),
    description: s.string(),
    image: s.object({
      alt: s.string()
    })
  })
});

const jsonLd = defineCollection({
  name: 'JsonLd',
  pattern: 'json-ld.md',
  single: true,
  schema: s.object({
    '@type': s.string(),
    memberOf: s.string(),
    name: s.string(),
    sameAs: s.array(s.string()),
    contactPoint: s.array(
      s.object({
        '@type': s.string(),
        email: s.string(),
        contactType: s.string(),
        availableLanguage: s.array(s.string())
      })
    )
  })
});

export default defineConfig({
  root: 'content',
  collections: { navbar, hero, footer, cookieConsent, twitterCard, jsonLd }
});
