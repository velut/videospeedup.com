<script lang="ts">
	import { optionAllVideos, optionFixedSpeed } from '$lib/stores';
	import hammerAndWrench from '@iconify/icons-noto/hammer-and-wrench';
	import Icon from '@iconify/svelte';
</script>

<h2 class="flex items-center gap-3">
	<Icon icon={hammerAndWrench} width="32" height="32" />
	Options
</h2>

<p>
	Here you can customize how the speed controls will work once added to your browser. To change
	behavior you will have to drag and drop the speed controls again.
</p>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text text-base"
			>Speed controls just set their speed when clicked and never set 1x.</span
		>
		<input
			id="option-fixed-speed"
			type="checkbox"
			class="toggle"
			bind:checked={$optionFixedSpeed}
		/>
	</label>
</div>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text text-base"
			>Speed controls affect all videos on the page and not just one video.</span
		>
		<input id="option-all-videos" type="checkbox" class="toggle" bind:checked={$optionAllVideos} />
	</label>
</div>
