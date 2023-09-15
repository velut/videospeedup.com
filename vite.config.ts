import { sveltekit } from '@sveltejs/kit/vite';
import { execSync } from 'node:child_process';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { licenses } from './vite-plugin-licenses';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
		licenses()
	],
	define: {
		_GIT_COMMIT: JSON.stringify(execSync('git rev-parse HEAD').toString().trim())
	}
});
