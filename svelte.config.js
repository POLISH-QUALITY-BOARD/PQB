import adapter from '@sveltejs/adapter-static';

const base = process.env.BASE_PATH;
const origin = process.env.ORIGIN;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build'
    }),
    paths: { ...(base && { base }), relative: false },
    ...(origin && { prerender: { origin } })
  },
  vitePlugin: {
    dynamicCompileOptions: ({ filename }) =>
      filename.includes('node_modules') ? undefined : { runes: true }
  }
};

export default config;
