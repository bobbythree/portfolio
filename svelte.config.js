import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ... other options
  kit: {
    adapter: adapter(),
    // REMOVE THE CSRF OBJECT ENTIRELY:
    // By default, CSRF check is enabled in production (safe)
    // and skipped in development (convenient for local dev)
    // csrf: {
    //   checkOrigin: process.env.NODE_ENV === "development" ? false : true,
    // },
  },
  preprocess: vitePreprocess(),
};

export default config;
