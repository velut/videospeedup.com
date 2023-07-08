<script lang="ts">
	import FastForwardIcon from '$lib/components/FastForwardIcon.svelte';
	import FastReverseIcon from '$lib/components/FastReverseIcon.svelte';

	export let speed: number;

	const js = `javascript:(function(){var v=document.querySelector('video');v.playbackRate=${speed};})();`;
</script>

<a href={js} class="btn btn-lg normal-case btn-neutral shadow-lg">
	{#if speed >= 1}
		<FastForwardIcon class="h-5 w-5" />
	{:else}
		<FastReverseIcon class="h-5 w-5" />
	{/if}
	{speed}x
</a>
