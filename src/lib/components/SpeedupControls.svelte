<script lang="ts">
	import SpeedControl from '$lib/components/SpeedControl.svelte';

	const speeds = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 5];
</script>

<h2>⏩ Speedup Controls</h2>

<p>
	Drag and drop the speedup controls available below to your browser bookmarks bar and click on them
	to watch videos at faster speeds.
</p>

<div class="not-prose grid grid-cols-2 gap-4 mt-6 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
	{#each speeds as speed}
		<SpeedControl {speed} />
	{/each}
</div>
