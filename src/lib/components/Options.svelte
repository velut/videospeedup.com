<script lang="ts">
	import HammerAndWrenchIcon from '$lib/components/HammerAndWrenchIcon.svelte';
	import { optionAllMedia, optionFixedSpeed, optionIncludeAudio } from '$lib/stores';
</script>

<h2 class="flex items-center gap-3">
	<HammerAndWrenchIcon class="h-8 w-8" />
	Options
</h2>

<p>
	Here you can customize how the speed controls will work once added to your browser. To change
	behavior, you will have to drag and drop the speed controls again.
</p>

<div class="divider" />

<div class="form-control">
	<label class="label cursor-pointer gap-6">
		<span class="label-text text-base"
			><span class="font-bold">Speed controls just set their speed and never reset back to 1x.</span
			><br /><span class="text-sm"
				>By default, speed controls alternate between their speed (for example, 3x) and the default
				1x speed. Turn on this feature to have them just set their speed without going back to 1x.</span
			>
		</span>
		<input
			id="option-fixed-speed"
			type="checkbox"
			class="toggle"
			bind:checked={$optionFixedSpeed}
		/>
	</label>
</div>

<div class="divider" />

<div class="form-control">
	<label class="label cursor-pointer gap-6">
		<span class="label-text text-base"
			><span class="font-bold">Speed controls affect all media elements on a page.</span><br /><span
				class="text-sm"
				>By default, speed controls only affect the first video in a page. Turn on this feature to
				have them affect all videos in a page. This lets you watch multiple videos on Youtube Shorts
				or Twitter at faster speeds.</span
			></span
		>
		<input id="option-all-media" type="checkbox" class="toggle" bind:checked={$optionAllMedia} />
	</label>
</div>

<div class="divider" />

<div class="form-control">
	<label class="label cursor-pointer gap-6">
		<span class="label-text text-base"
			><span class="font-bold">Speed controls also affect audio-only elements.</span><br /><span
				class="text-sm"
				>By default, speed controls only affect video elements in a page. Turn on this feature to
				have them also affect audio-only elements in a page ("All media elements" feature may also
				be needed for this to work).</span
			></span
		>
		<input
			id="option-include-audio"
			type="checkbox"
			class="toggle"
			bind:checked={$optionIncludeAudio}
		/>
	</label>
</div>
