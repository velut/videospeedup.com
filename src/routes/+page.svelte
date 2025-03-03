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
		<div class="divider"></div>
		<Intro />
		<div class="divider"></div>

		<div class="lg:grid lg:grid-cols-2 lg:gap-16">
			<div class="max-w-prose">
				<HowTo />
				<div class="divider"></div>

				<Options />
				<div class="divider"></div>
			</div>

			<div class="max-w-prose">
				<SpeedupControls />
				<div class="divider"></div>

				<SlowdownControls />
				<div class="divider"></div>

				<CustomSpeedControl />
				<div class="divider"></div>
			</div>
		</div>
	</article>
</main>
