import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter(),
	  csrf: {
		checkOrigin: process.env.NODE_ENV === "development" ? false : true,
	  },
	}
	
  };

export default config;
