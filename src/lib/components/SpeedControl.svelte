<script lang="ts">
	import { makeBookmarklet } from '$lib/make-bookmarklet';
	import { options } from '$lib/state.svelte';
	import IconFastForward from '~icons/noto/fast-forward-button';
	import IconFastReverse from '~icons/noto/fast-reverse-button';

	interface Props {
		speed: number;
	}

	let { speed }: Props = $props();

	let bookmarklet = $derived(
		makeBookmarklet({
			speed,
			fixedSpeed: options.fixedSpeed,
			allMedia: options.allMedia,
			includeAudio: options.includeAudio
		})
	);
</script>

<a
	href={bookmarklet}
	class="btn btn-outline btn-lg text-lg shadow-lg"
	title="↑ Drag and drop this up to the bookmarks bar ↑"
>
	{#if speed >= 1}
		<IconFastForward class="size-6" />
	{:else}
		<IconFastReverse class="size-6" />
	{/if}
	{speed}x
</a>
