<script lang="ts">
	import CustomSpeedControl from '$lib/components/CustomSpeedControl.svelte';
	import HowTo from '$lib/components/HowTo.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import Options from '$lib/components/Options.svelte';
	import SlowdownControls from '$lib/components/SlowdownControls.svelte';
	import SpeedupControls from '$lib/components/SpeedupControls.svelte';
	import { projectNameStylized } from '$lib/metadata';
</script>

<Metadata
	title="Watch videos faster"
	description="With {projectNameStylized} you can watch videos faster."
/>

<main class="flex items-center justify-center p-4 sm:p-8">
	<article class="prose lg:max-w-full">
		<div class="divider" />
		<Intro />
		<div class="divider" />

		<div class="lg:grid lg:grid-cols-2 lg:gap-16">
			<div class="max-w-prose">
				<HowTo />
				<div class="divider" />

				<Options />
				<div class="divider" />
			</div>

			<div class="max-w-prose">
				<SpeedupControls />
				<div class="divider" />

				<SlowdownControls />
				<div class="divider" />

				<CustomSpeedControl />
				<div class="divider" />
			</div>
		</div>
	</article>
</main>
