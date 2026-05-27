import type { Element, Root } from 'hast';
import rehypeExternalLinks from 'rehype-external-links';
import { visit } from 'unist-util-visit';
import { defineCollection, defineConfig, s } from 'velite';

const base = process.env.BASE_PATH ?? '';

const href = () =>
  s
    .string()
    .transform((h) =>
      /^https?:|^mailto:|^#/.test(h) ? h : base + (h.startsWith('/') ? h : '/' + h)
    );

const rehypeBasePath = () => (tree: Root) => {
  visit(tree, 'element', (node: Element) => {
    if (
      node.tagName === 'a' &&
      typeof node.properties?.href === 'string' &&
      node.properties.href.startsWith('/')
    ) {
      node.properties.href = base + node.properties.href;
    }
  });
};

const announcement = defineCollection({
  name: 'Announcement',
  pattern: 'announcement.md',
  single: true,
  schema: s.object({
    body: s.markdown()
  })
});

const navbar = defineCollection({
  name: 'Navbar',
  pattern: 'navbar.md',
  single: true,
  schema: s.object({
    brand: s.object({
      ariaLabel: s.string(),
      alt: s.string()
    }),
    navigation: s.object({
      ariaLabel: s.string()
    }),
    hamburgerButton: s.object({
      openLabel: s.string(),
      closeLabel: s.string()
    }),
    navbarItems: s.array(
      s.object({
        href: href(),
        text: s.string(),
        children: s
          .array(
            s.object({
              href: href(),
              text: s.string()
            })
          )
          .optional()
      })
    ),
    joinUsButton: s.object({
      href: href(),
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
      href: href(),
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
          href: href(),
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
          href: href(),
          text: s.string()
        })
      }),
      downloadNdaDeclaration: s.object({
        heading: s.string(),
        description: s.string(),
        action: s.object({
          href: href(),
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

const dictionary = defineCollection({
  name: 'Dictionary',
  pattern: 'sections/portfolio/dictionary.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    description: s.string(),
    link: s.object({
      href: href(),
      text: s.string()
    }),
    body: s.markdown()
  })
});

const scr = defineCollection({
  name: 'Scr',
  pattern: 'sections/portfolio/scr.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    description: s.string(),
    registryLink: s.object({
      href: href(),
      text: s.string()
    }),
    addToRegistryLink: s
      .object({
        href: href(),
        text: s.string()
      })
      .optional(),
    body: s.markdown()
  })
});

const scrPage = defineCollection({
  name: 'ScrPage',
  pattern: 'pages/scr.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    steps: s.object({
      heading: s.string(),
      items: s.array(
        s.object({
          title: s.string(),
          description: s.string(),
          action: s
            .object({
              type: s.enum(['downloads', 'email']),
              downloads: s
                .array(
                  s.object({
                    label: s.string(),
                    href: href()
                  })
                )
                .optional(),
              address: s.string().optional()
            })
            .optional()
        })
      )
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
          href: href(),
          text: s.string()
        })
      )
    }),
    documents: s.object({
      label: s.string(),
      links: s.array(
        s.object({
          href: href(),
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
        href: href()
      }),
      facebook: s.object({
        ariaLabel: s.string(),
        href: href()
      }),
      github: s.object({
        ariaLabel: s.string(),
        href: href()
      }),
      discord: s.object({
        ariaLabel: s.string(),
        href: href()
      })
    }),
    additionalItems: s.array(s.string()),
    copyright: s.string(),
    privacyPolicy: s.object({
      href: href(),
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
    title: s.string(),
    description: s.string(),
    image: s.object({
      alt: s.string()
    })
  })
});

const about = defineCollection({
  name: 'About',
  pattern: 'sections/about.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    board: s.object({
      heading: s.string(),
      board: s.object({
        label: s.string(),
        members: s.array(
          s.object({
            name: s.string(),
            role: s.string(),
            image: s.string(),
            linkedin: s.object({
              href: href(),
              ariaLabel: s.string()
            })
          })
        )
      }),
      committee: s.object({
        label: s.string(),
        members: s.array(
          s.object({
            name: s.string(),
            role: s.string(),
            image: s.string(),
            linkedin: s.object({
              href: href(),
              ariaLabel: s.string()
            })
          })
        )
      })
    }),
    body: s.markdown()
  })
});

const syllabi = defineCollection({
  name: 'Syllabi',
  pattern: 'pages/syllabi.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    body: s.markdown(),
    certifications: s.array(
      s.object({
        code: s.string(),
        title: s.string(),
        documents: s.array(
          s.object({
            lang: s.string(),
            type: s.enum(['syllabus', 'questions', 'answers', 'guide']),
            file: href(),
            github: s.string().optional()
          })
        )
      })
    )
  })
});

const accreditation = defineCollection({
  name: 'Accreditation',
  pattern: 'sections/accreditation.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    articles: s.array(
      s.object({
        id: s.string(),
        heading: s.string(),
        description: s.string()
      })
    ),
    steps: s.object({
      heading: s.string(),
      items: s.array(
        s.object({
          title: s.string(),
          description: s.string(),
          action: s
            .object({
              type: s.enum(['downloads', 'email']),
              downloads: s
                .array(
                  s.object({
                    label: s.string(),
                    href: href()
                  })
                )
                .optional(),
              address: s.string().optional()
            })
            .optional()
        })
      )
    }),
    body: s.markdown()
  })
});

const jsonLd = defineCollection({
  name: 'JsonLd',
  pattern: 'json-ld.md',
  single: true,
  schema: s.object({
    memberOf: s.string(),
    name: s.string(),
    sameAs: s.array(s.string()),
    contactPoint: s.array(
      s.object({
        email: s.string(),
        availableLanguage: s.array(s.string())
      })
    )
  })
});

const accreditationRegistry = defineCollection({
  name: 'AccreditationRegistry',
  pattern: 'pages/accreditation-registry.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    body: s.markdown()
  })
});

const accreditationRegistryTrainers = defineCollection({
  name: 'AccreditationRegistryTrainers',
  pattern: 'pages/accreditation-registry/trainers.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    emptyMessage: s.string(),
    activeLabel: s.string(),
    expiredLabel: s.string(),
    body: s.markdown(),
    filters: s.array(
      s.object({
        code: s.string(),
        text: s.string(),
        tooltip: s.string()
      })
    ),
    items: s.array(
      s
        .object({
          photo: s.string().optional(),
          name: s.string(),
          dateFrom: s.isodate(),
          dateTo: s.isodate(),
          certifications: s.array(s.string()),
          linkedin: s
            .object({
              href: href(),
              ariaLabel: s.string()
            })
            .optional()
        })
        .transform((item) => ({
          ...item,
          dateToLabel: new Date(item.dateTo).toLocaleDateString('pl-PL')
        }))
    )
  })
});

const accreditationRegistryProviders = defineCollection({
  name: 'AccreditationRegistryProviders',
  pattern: 'pages/accreditation-registry/providers.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    emptyMessage: s.string(),
    activeLabel: s.string(),
    expiredLabel: s.string(),
    body: s.markdown(),
    filters: s.array(
      s.object({
        code: s.string(),
        text: s.string(),
        tooltip: s.string()
      })
    ),
    items: s.array(
      s.object({
        name: s.string(),
        logo: s.string().optional(),
        certifications: s.array(
          s
            .object({
              code: s.string(),
              dateFrom: s.isodate(),
              dateTo: s.isodate().optional()
            })
            .transform((cert) => ({
              ...cert,
              dateToLabel: cert.dateTo
                ? new Date(cert.dateTo).toLocaleDateString('pl-PL')
                : undefined
            }))
        ),
        website: s
          .object({
            href: href(),
            ariaLabel: s.string()
          })
          .optional()
      })
    )
  })
});

const accreditationRegistryMaterials = defineCollection({
  name: 'AccreditationRegistryMaterials',
  pattern: 'pages/accreditation-registry/materials.md',
  single: true,
  schema: s.object({
    heading: s.string(),
    emptyMessage: s.string(),
    body: s.markdown(),
    items: s.array(
      s.object({
        name: s.string(),
        author: s.object({
          name: s.string(),
          website: s
            .object({
              href: href(),
              ariaLabel: s.string()
            })
            .optional(),
          linkedin: s
            .object({
              href: href(),
              ariaLabel: s.string()
            })
            .optional()
        }),
        dateFrom: s.isodate().transform((d) => new Date(d).toLocaleDateString('pl-PL'))
      })
    )
  })
});

export default defineConfig({
  root: 'content',
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      rehypeBasePath
    ]
  },
  collections: {
    announcement,
    navbar,
    hero,
    about,
    accreditation,
    featuredContent,
    join,
    portfolio,
    dictionary,
    scr,
    scrPage,
    syllabi,
    footer,
    cookieConsent,
    openGraph,
    twitterCard,
    jsonLd,
    accreditationRegistry,
    accreditationRegistryTrainers,
    accreditationRegistryProviders,
    accreditationRegistryMaterials
  }
});
