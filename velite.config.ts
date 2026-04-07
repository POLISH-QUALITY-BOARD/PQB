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

export default defineConfig({
  root: 'content',
  collections: { navbar, cookieConsent }
});
