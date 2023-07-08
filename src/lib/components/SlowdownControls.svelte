<script lang="ts">
	import FastReverseIcon from '$lib/components/FastReverseIcon.svelte';
	import SpeedControl from '$lib/components/SpeedControl.svelte';

	const speeds = [0.1, 0.25, 0.5, 0.75];
</script>

<h2 class="flex items-center gap-3">
	<FastReverseIcon class="h-7 w-7 lg:h-9 lg:w-9" />
	Slowdown Controls
</h2>

<p>
	Drag and drop the slowdown controls available below to your browser bookmarks bar and click on
	them to watch videos at slower speeds.
</p>

<div class="not-prose grid grid-cols-2 gap-4 mt-6 sm:gap-6 sm:grid-cols-4">
	{#each speeds as speed}
		<SpeedControl {speed} />
	{/each}
</div>
