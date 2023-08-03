<script lang="ts">
	import FastForwardIcon from '$lib/components/FastForwardIcon.svelte';
	import SpeedControl from '$lib/components/SpeedControl.svelte';

	const speeds = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 5];
</script>

<h2 class="flex items-center gap-3">
	<FastForwardIcon class="h-8 w-8" />
	Speedup Controls
</h2>

<p>
	Drag and drop the speedup controls available below to your browser bookmarks bar and click on them
	to watch videos at faster speeds.
</p>

<div class="not-prose mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
	{#each speeds as speed}
		<SpeedControl {speed} />
	{/each}
</div>
