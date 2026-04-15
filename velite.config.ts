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

const featuredContent = defineCollection({
  name: 'FeaturedContent',
  pattern: 'sections/featured-content.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    openButton: s.object({
      text: s.string()
    }),
    whitepapers: s.object({
      label: s.string(),
      links: s.array(
        s.object({
          href: s.string(),
          title: s.string()
        })
      )
    }),
    body: s.markdown()
  })
});

const join = defineCollection({
  name: 'Join',
  pattern: 'sections/join.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    benefits: s.object({
      trainings: s.object({
        heading: s.string(),
        description: s.string()
      }),
      community: s.object({
        heading: s.string(),
        description: s.string()
      }),
      trends: s.object({
        heading: s.string(),
        description: s.string()
      }),
      support: s.object({
        heading: s.string(),
        description: s.string()
      })
    }),
    steps: s.object({
      heading: s.string(),
      downloadMembershipDeclaration: s.object({
        heading: s.string(),
        description: s.string(),
        action: s.object({
          href: s.string(),
          text: s.string()
        })
      }),
      downloadNdaDeclaration: s.object({
        heading: s.string(),
        description: s.string(),
        action: s.object({
          href: s.string(),
          text: s.string()
        })
      }),
      sendDocuments: s.object({
        heading: s.string(),
        description: s.string(),
        action: s.object({
          address: s.string()
        })
      })
    }),
    body: s.markdown()
  })
});

const portfolio = defineCollection({
  name: 'Portfolio',
  pattern: 'sections/portfolio.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    anchor: s.object({
      title: s.string(),
      image: s.object({
        alt: s.string()
      })
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

const openGraph = defineCollection({
  name: 'OpenGraph',
  pattern: 'open-graph.md',
  single: true,
  schema: s.object({
    type: s.string(),
    title: s.string(),
    description: s.string(),
    siteName: s.string(),
    locale: s.string(),
    image: s.object({
      alt: s.string()
    })
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

const accreditationList = defineCollection({
  name: 'AccreditationList',
  pattern: 'sections/accreditation-list.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    body: s.markdown(),
    certifications: s.array(
      s.object({
        code: s.string(),
        label: s.string()
      })
    )
  })
});

const accreditationListTrainers = defineCollection({
  name: 'AccreditationListTrainers',
  pattern: 'sections/accreditation-list/trainers.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    emptyMessage: s.string(),
    activeLabel: s.string(),
    expiredLabel: s.string(),
    body: s.markdown(),
    items: s.array(
      s.object({
        photo: s.string(),
        name: s.string(),
        dateTo: s.string(),
        certifications: s.array(s.string()),
        linkedin: s.string().optional()
      })
    )
  })
});

const accreditationListProviders = defineCollection({
  name: 'AccreditationListProviders',
  pattern: 'sections/accreditation-list/providers.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    emptyMessage: s.string(),
    activeLabel: s.string(),
    expiredLabel: s.string(),
    body: s.markdown(),
    items: s.array(
      s.object({
        name: s.string(),
        logo: s.string(),
        certifications: s.array(s.string()),
        dateTo: s.string(),
        link: s.string().optional()
      })
    )
  })
});

const accreditationListMaterials = defineCollection({
  name: 'AccreditationListMaterials',
  pattern: 'sections/accreditation-list/materials.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    emptyMessage: s.string(),
    openLabel: s.string(),
    body: s.markdown(),
    items: s.array(
      s.object({
        name: s.string(),
        author: s.string(),
        authorLinkedin: s.string().optional(),
        dateTo: s.string(),
        link: s.string()
      })
    )
  })
});

export default defineConfig({
  root: 'content',
  collections: {
    navbar,
    hero,
    featuredContent,
    join,
    portfolio,
    footer,
    cookieConsent,
    openGraph,
    twitterCard,
    jsonLd,
    accreditationList,
    accreditationListTrainers,
    accreditationListProviders,
    accreditationListMaterials
  }
});
