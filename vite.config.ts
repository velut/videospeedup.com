import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from 'node:child_process';
import Icons from 'unplugin-icons/vite';
import { defineConfig, perEnvironmentPlugin } from 'vite';
import { licenses } from './vite-plugin-licenses.js';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({ fallback: '404.html' }),

			prerender: {
				handleHttpError: ({ path, message }) => {
					if (path === '/third-party-licenses.txt') return;

					throw new Error(message);
				}
			}
		}),
		Icons({ compiler: 'svelte' }),
		perEnvironmentPlugin('vite-plugin-licenses', (environment) => {
			if (environment.name !== 'client') return false;
			return licenses() as any;
		})
	],
	define: {
		__GIT_COMMIT: JSON.stringify(execSync('git rev-parse HEAD').toString().trim())
	}
});
