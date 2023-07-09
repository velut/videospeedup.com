<script lang="ts">
	import fastForwardButton from '@iconify/icons-noto/fast-forward-button';
	import fastReverseButton from '@iconify/icons-noto/fast-reverse-button';
	import Icon from '@iconify/svelte';

	export let speed: number;

	const js = `javascript:(function(){var v=document.querySelector('video');v.playbackRate=${speed};})();`;

	$: icon = speed >= 1 ? fastForwardButton : fastReverseButton;
</script>

<a href={js} class="btn btn-lg normal-case btn-outline border-opacity-50 shadow-lg text-lg">
	<Icon {icon} width="24" height="24" />
	{speed}x
</a>
