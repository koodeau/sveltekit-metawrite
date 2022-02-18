import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
/** @type {@type {import('vite').UserConfig}} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	vite: {
		server: {
			fs: {
				allow: ["."] // this is required to access metawrite package folder
			}
		},
		hmr: {
			protocol: 'ws',
			// timeout: 1000,
			host: '0.0.0.0',
			port: '24678'
		}
	}
};

export default config;
