<script lang="ts">
	import SpeedControl from '$lib/components/SpeedControl.svelte';
	import IconFastReverse from '~icons/noto/fast-reverse-button';

	const speeds = [0.1, 0.25, 0.5, 0.75];
</script>

<h2 class="flex items-center gap-3">
	<IconFastReverse class="size-8 flex-none" />
	Slowdown controls
</h2>

<p>
	Drag and drop the slowdown controls available below to your browser's bookmarks bar and click on
	them to watch videos at slower speeds.
</p>

<div class="not-prose mt-6 grid grid-cols-2 gap-4 sm:gap-6">
	{#each speeds as speed}
		<SpeedControl {speed} />
	{/each}
</div>
