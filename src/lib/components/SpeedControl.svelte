<script lang="ts">
	import { makeBookmarklet } from '$lib/make-bookmarklet';
	import { optionAllMedia, optionFixedSpeed, optionIncludeAudio } from '$lib/stores';
	import fastForwardButton from '@iconify/icons-noto/fast-forward-button';
	import fastReverseButton from '@iconify/icons-noto/fast-reverse-button';
	import Icon from '@iconify/svelte';

	export let speed: number;

	$: icon = speed >= 1 ? fastForwardButton : fastReverseButton;
	$: bookmarklet = makeBookmarklet({
		speed,
		fixedSpeed: $optionFixedSpeed,
		allMedia: $optionAllMedia,
		includeAudio: $optionIncludeAudio
	});
</script>

<a href={bookmarklet} class="btn btn-lg normal-case btn-outline shadow-lg text-lg">
	<Icon {icon} width="24" height="24" />
	{speed}x
</a>
