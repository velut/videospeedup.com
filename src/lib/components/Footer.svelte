<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import IconFastForward from '~icons/noto/fast-forward-button';

	const authorUrl = `https://github.com/velut`;
	const ghUrl = `https://github.com/velut/videospeedup.com`;
	const ghCommitUrl = `${ghUrl}/commit/${__GIT_COMMIT}`;
	const ghCommitShort = __GIT_COMMIT.slice(0, 7);
</script>

<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
	<div>
		<a href="/" class="link-hover link flex items-center gap-2 text-xl font-bold"
			><IconFastForward class="size-6" /> VideoSpeedup.com</a
		>
		<p>
			Created by <a href={authorUrl} class="link-hover link font-bold">Edoardo Scibona</a>
		</p>
		<p class="text-sm">
			Commit: <a href={ghCommitUrl} class="link-hover link">{ghCommitShort}</a>
		</p>
	</div>

	<div>
		<span class="footer-title opacity-80">Links</span>
		<a href="/" class="link-hover link">Homepage</a>
		<a href={ghUrl} class="link-hover link">GitHub project</a>
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
