<script lang="ts">
	import CustomSpeedControl from '$lib/components/CustomSpeedControl.svelte';
	import HowTo from '$lib/components/HowTo.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Options from '$lib/components/Options.svelte';
	import SlowdownControls from '$lib/components/SlowdownControls.svelte';
	import SpeedupControls from '$lib/components/SpeedupControls.svelte';
</script>

<main class="flex items-center justify-center p-4 sm:p-8">
	<article class="prose lg:max-w-full">
		<Intro />
		<div class="lg:grid lg:grid-cols-2 lg:gap-16">
			<div class="max-w-prose">
				<HowTo />
				<Options />
			</div>
			<div class="max-w-prose">
				<SpeedupControls />
				<SlowdownControls />
				<CustomSpeedControl />
			</div>
		</div>
	</article>
</main>
