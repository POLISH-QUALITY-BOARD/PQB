import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { playwright } from '@vitest/browser-playwright';
import Icons from 'unplugin-icons/vite';
import { fileURLToPath } from 'url';
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

const base = process.env.BASE_PATH;
const origin = process.env.ORIGIN;

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries.
        // Can be removed in Svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true
      },
      adapter: adapter({ pages: 'build', assets: 'build' }),
      paths: { ...(base && ({ base } as { base: `/${string}` })), relative: false, origin }
    }),
    Icons({ compiler: 'svelte' }),
    velite()
  ],
  resolve: {
    alias: {
      $velite: fileURLToPath(new URL('./.velite', import.meta.url))
    }
  },
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
        'src/routes/**',
        'src/lib/components/sections/**'
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
