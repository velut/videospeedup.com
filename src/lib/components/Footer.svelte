<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import {
		githubCommitShort,
		githubCommitUrl,
		githubUrl,
		projectNameStylized
	} from '$lib/metadata';
	import IconFastForward from '~icons/noto/fast-forward-button';
</script>

<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
	<div>
		<a href="/" class="link-hover link flex items-center gap-2 text-xl font-bold"
			><IconFastForward class="h-6 w-6" /> {projectNameStylized}</a
		>
		<p>
			Created by <a href="https://www.edoardoscibona.com" class="link-hover link font-bold"
				>Edoardo Scibona</a
			>
		</p>
		<p class="text-sm">
			Commit: <a href={githubCommitUrl} class="link-hover link">{githubCommitShort}</a>
		</p>
	</div>

	<div>
		<span class="footer-title opacity-80">Links</span>
		<a href="/" class="link-hover link">Homepage</a>
		<a href={githubUrl} class="link-hover link">GitHub project</a>
	</div>

	<div>
		<span class="footer-title opacity-80">Legal</span>
		<a href="/privacy/" class="link-hover link">Privacy policy</a>
		<a href="/licenses/" class="link-hover link">Software licenses</a>
	</div>

	<div>
		<span class="footer-title opacity-80">Theme</span>
		<ThemeSwitch />
	</div>
</footer>
