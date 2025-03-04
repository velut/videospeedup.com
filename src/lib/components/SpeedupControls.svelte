<script lang="ts">
	import SpeedControl from '$lib/components/SpeedControl.svelte';
	import IconFastForward from '~icons/noto/fast-forward-button';

	const speeds = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 5];
</script>

<h2 class="flex items-center gap-3">
	<IconFastForward class="size-8 flex-none" />
	Speedup controls
</h2>

<p>
	Drag and drop the speedup controls available below to your browser's bookmarks bar and click on
	them to watch videos at faster speeds.
</p>

<div class="not-prose mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
	{#each speeds as speed}
		<SpeedControl {speed} />
	{/each}
</div>

<div class="divider"></div>
