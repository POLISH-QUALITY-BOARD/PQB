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

export default defineConfig({
  plugins: [tailwindcss(), enhancedImages(), sveltekit(), Icons({ compiler: 'svelte' }), velite()],
  server: {
    fs: {
      allow: ['.velite']
    }
  },
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
        extends: './vite.config.ts',
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
        extends: './vite.config.ts',
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
