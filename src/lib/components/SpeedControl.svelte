<script lang="ts">
	export let speed: number;

	const js = `javascript:(function(){var v=document.querySelector('video');v.playbackRate=${speed};})();`;

	$: icon = speed >= 1 ? '⏩' : '⏪';
</script>

<div class="btn btn-lg normal-case btn-neutral shadow-lg">
	<a href={js}>
		{icon}
		{speed}x
	</a>
</div>
