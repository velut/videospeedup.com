<script lang="ts">
	import { makeBookmarklet } from '$lib/make-bookmarklet';
	import { optionAllMedia, optionFixedSpeed, optionIncludeAudio } from '$lib/stores';
	import IconFastForward from '~icons/noto/fast-forward-button';
	import IconFastReverse from '~icons/noto/fast-reverse-button';

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
	class="btn btn-outline btn-lg text-lg shadow-lg"
	title="↑ Drag and drop this up to the bookmarks bar ↑"
>
	{#if speed >= 1}
		<IconFastForward class="h-6 w-6" />
	{:else}
		<IconFastReverse class="h-6 w-6" />
	{/if}
	{speed}x
</a>
