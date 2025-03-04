<script lang="ts">
	import SpeedControl from '$lib/components/SpeedControl.svelte';
	import IconShuffleTracks from '~icons/noto/shuffle-tracks-button';

	const inputId = 'custom-speed-input';

	let value = $state('');
	let speed = $derived(Number.isFinite(Number(value)) ? Number(value) : 1);
</script>

<h2 class="flex items-center gap-3">
	<IconShuffleTracks class="size-8 flex-none" />
	Custom speed control
</h2>

<p>
	Use the input available below to create a custom speed control. Use values between <code>0</code>
	and <code>1</code> for a slowdown effect (for example, <code>0.28</code>); use values greater than
	<code>1</code> for a speedup effect (for example, <code>1.2</code>).
</p>

<div class="not-prose mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
	<div>
		<label for={inputId} class="sr-only">Custom speed value</label>
		<input
			id={inputId}
			name={inputId}
			type="text"
			class="input input-lg text-base-content w-full border-current"
			placeholder="Any speed..."
			bind:value
		/>
	</div>
	<SpeedControl {speed} />
</div>
