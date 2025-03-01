<script lang="ts">
	import { optionAllMedia, optionFixedSpeed, optionIncludeAudio } from '$lib/stores';
	import IconHammerAndWrench from '~icons/noto/hammer-and-wrench';
	import IconInfinity from '~icons/noto/infinity';
	import IconMusicalNote from '~icons/noto/musical-note';
	import IconRepeatSingle from '~icons/noto/repeat-single-button';
</script>

<h2 class="flex items-center gap-3">
	<IconHammerAndWrench class="h-8 w-8" />
	Options
</h2>

<p>
	Here you can customize how the speed controls will behave once added to your browser. For changes
	to take effect, you will have to drag and drop the speed controls again.
</p>

<div class="divider"></div>

<div class="form-control">
	<label class="label cursor-pointer gap-6">
		<span class="label-text text-base"
			><span class="flex items-center gap-2 font-bold"
				><IconRepeatSingle class="h-5 w-5 flex-none" /> Speed controls just set their speed and never
				1x.</span
			><span class="mt-2 block text-sm"
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

<div class="divider"></div>

<div class="form-control">
	<label class="label cursor-pointer gap-6">
		<span class="label-text text-base"
			><span class="flex items-center gap-2 font-bold"
				><IconInfinity class="h-5 w-5 flex-none" /> Speed controls affect all media elements on a page.</span
			><span class="mt-2 block text-sm"
				>By default, speed controls only affect the first video in a page. Turn on this feature to
				have them affect all videos in a page. This lets you watch multiple videos on TikTok,
				Youtube Shorts or Twitter at faster speeds.</span
			></span
		>
		<input id="option-all-media" type="checkbox" class="toggle" bind:checked={$optionAllMedia} />
	</label>
</div>

<div class="divider"></div>

<div class="form-control">
	<label class="label cursor-pointer gap-6">
		<span class="label-text text-base"
			><span class="flex items-center gap-2 font-bold"
				><IconMusicalNote class="h-5 w-5 flex-none" /> Speed controls also affect audio-only elements.</span
			><span class="mt-2 block text-sm"
				>By default, speed controls only affect video elements in a page. Turn on this feature to
				have them also affect audio-only elements in a page (The "All media elements" feature above
				may also be needed for this to work).</span
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
