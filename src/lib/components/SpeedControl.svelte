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

<a
	href={bookmarklet}
	class="btn btn-outline btn-lg text-lg normal-case shadow-lg"
	title="↑ Drag and drop this up to the bookmarks bar ↑"
>
	{#if speed >= 1}
		<FastForwardIcon class="h-6 w-6" />
	{:else}
		<FastReverseIcon class="h-6 w-6" />
	{/if}
	{speed}x
</a>
