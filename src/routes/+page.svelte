<script lang="ts">
	import CustomSpeedControl from '$lib/components/CustomSpeedControl.svelte';
	import HowTo from '$lib/components/HowTo.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import SlowdownControls from '$lib/components/SlowdownControls.svelte';
	import SpeedupControls from '$lib/components/SpeedupControls.svelte';
	import { projectNameStylized } from '$lib/metadata';
</script>

<Metadata
	title="Watch videos faster"
	description="With {projectNameStylized} you can watch videos faster."
/>

<main class="flex items-center justify-center p-4 sm:p-8">
	<article class="prose">
		<div class="divider" />
		<Intro />
		<div class="divider" />

		<HowTo />
		<div class="divider" />

		<SpeedupControls />
		<div class="divider" />

		<SlowdownControls />
		<div class="divider" />

		<CustomSpeedControl />
		<div class="divider" />
	</article>
</main>
