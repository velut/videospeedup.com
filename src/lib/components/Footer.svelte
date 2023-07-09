<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import {
		githubCommitShort,
		githubCommitUrl,
		githubUrl,
		projectNameStylized
	} from '$lib/metadata';
	import fastForwardButton from '@iconify/icons-noto/fast-forward-button';
	import Icon from '@iconify/svelte';
</script>

<footer class="footer bg-base-200 p-8 text-base text-base-content">
	<div>
		<a href="/" class="link-hover link flex items-center gap-2 text-xl font-bold">
			<Icon icon={fastForwardButton} width="24" height="24" />
			{projectNameStylized}
		</a>
		<p>
			Created by <a
				href="https://www.edoardoscibona.com"
				target="_blank"
				class="link-hover link font-bold">Edoardo Scibona</a
			>
		</p>
		<p class="text-sm">
			Commit: <a href={githubCommitUrl} target="_blank" class="link-hover link">
				{githubCommitShort}
			</a>
		</p>
	</div>

	<div>
		<span class="footer-title opacity-80">Links</span>
		<a href="/" class="link-hover link">Homepage</a>
		<a href={githubUrl} target="_blank" class="link-hover link">GitHub Project</a>
	</div>

	<div>
		<span class="footer-title opacity-80">Legal</span>
		<a href="/privacy/" class="link-hover link">Privacy Policy</a>
		<a href="/licenses/" class="link-hover link">Software Licenses</a>
	</div>

	<div>
		<span class="footer-title opacity-80">Theme</span>
		<ThemeSwitch />
	</div>
</footer>
