<script lang="ts">
	import { optionAllMedia, optionFixedSpeed, optionIncludeAudio } from '$lib/stores';
	import hammerAndWrench from '@iconify/icons-noto/hammer-and-wrench';
	import Icon from '@iconify/svelte';
</script>

<h2 class="flex items-center gap-3">
	<Icon icon={hammerAndWrench} width="32" height="32" />
	Options
</h2>

<p>
	Here you can customize how the speed controls will work once added to your browser. To change
	behavior, you will have to drag and drop the speed controls again.
</p>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text text-base"
			>Speed controls only set their speed and never reset to 1x.</span
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
			>Speed controls affect all media on a page and not just one element.</span
		>
		<input id="option-all-media" type="checkbox" class="toggle" bind:checked={$optionAllMedia} />
	</label>
</div>

<div class="form-control">
	<label class="label cursor-pointer">
		<span class="label-text text-base"
			>Speed controls also work on audio elements and not just video ones.</span
		>
		<input
			id="option-include-audio"
			type="checkbox"
			class="toggle"
			bind:checked={$optionIncludeAudio}
		/>
	</label>
</div>
