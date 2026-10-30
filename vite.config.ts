import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { playwright } from '@vitest/browser-playwright';
import Icons from 'unplugin-icons/vite';
import { type Plugin, defineConfig } from 'vitest/config';

const velite = (): Plugin => ({
  name: 'velite',
  buildStart: async () => {
    if (process.env.VITEST) {
      return;
    }

    const { build } = await import('velite');

    await build({ watch: false });
  },
  configureServer: async () => {
    if (process.env.VITEST) {
      return;
    }

    const { build } = await import('velite');

    build({ watch: true, logLevel: 'silent' });
  }
});

const origin = process.env.ORIGIN;

const isBasePath = (path: string): path is `/${string}` =>
  path.startsWith('/') && !path.endsWith('/');

const getBasePath = (path: string | undefined): `/${string}` | undefined => {
  if (!path) return undefined;
  if (!isBasePath(path)) throw new Error('BASE_PATH must start with "/" and must not end with "/"');
  return path;
};

const base = getBasePath(process.env.BASE_PATH);

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(),
    sveltekit({
      dynamicCompileOptions: ({ filename }) =>
        filename.includes('node_modules') ? undefined : { runes: true },
      adapter: adapter({ pages: 'build', assets: 'build' }),
      paths: { ...(base && { base }), relative: false, ...(origin && { origin }) }
    }),
    Icons({ compiler: 'svelte' }),
    velite()
  ],
  server: { fs: { allow: ['.velite'] } },
  test: {
    expect: { requireAssertions: true },
    clearMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**/*.{ts,svelte}'],
      exclude: [
        'src/**/*.{test,spec}.ts',
        'src/**/*.d.ts',
        'src/env.ts',
        'src/routes/**',
        'src/lib/components/sections/**',
        // TODO: Stopped working for unknown reason after migration to SvelteKit 3.
        'src/lib/components/Navbar.svelte'
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    },
    projects: [
      {
        test: {
          name: 'client',
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium', headless: true }]
          },
          include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
          exclude: ['src/lib/server/**']
        }
      },
      {
        test: {
          name: 'server',
          environment: 'node',
          include: ['src/**/*.{test,spec}.{js,ts}'],
          exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
        }
      }
    ]
  }
});
