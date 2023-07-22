<script lang="ts">
	import FastForwardIcon from '$lib/components/FastForwardIcon.svelte';
	import FastReverseIcon from '$lib/components/FastReverseIcon.svelte';
	import { makeBookmarklet } from '$lib/make-bookmarklet';
	import { optionAllMedia, optionFixedSpeed, optionIncludeAudio } from '$lib/stores';

	export let speed: number;

	$: bookmarklet = makeBookmarklet({
		speed,
		fixedSpeed: $optionFixedSpeed,
		allMedia: $optionAllMedia,
		includeAudio: $optionIncludeAudio
	});
</script>

<a href={bookmarklet} class="btn-outline btn-lg btn text-lg normal-case shadow-lg">
	{#if speed >= 1}
		<FastForwardIcon class="h-6 w-6" />
	{:else}
		<FastReverseIcon class="h-6 w-6" />
	{/if}
	{speed}x
</a>
