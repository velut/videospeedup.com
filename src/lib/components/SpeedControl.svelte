<script lang="ts">
	import { optionFixedSpeed } from '$lib/stores';
	import fastForwardButton from '@iconify/icons-noto/fast-forward-button';
	import fastReverseButton from '@iconify/icons-noto/fast-reverse-button';
	import Icon from '@iconify/svelte';

	export let speed: number;

	$: icon = speed >= 1 ? fastForwardButton : fastReverseButton;
	$: js = $optionFixedSpeed
		? `javascript:(function(){var v=document.querySelector('video');v.playbackRate=${speed};})();`
		: `javascript:(function(){var v=document.querySelector('video');v.playbackRate=v.playbackRate!==1?1:${speed};})();`;
</script>

<a href={js} class="btn btn-lg normal-case btn-outline shadow-lg text-lg">
	<Icon {icon} width="24" height="24" />
	{speed}x
</a>
