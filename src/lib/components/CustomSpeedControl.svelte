<script lang="ts">
	import ShuffleIcon from '$lib/components/ShuffleIcon.svelte';
	import SpeedControl from '$lib/components/SpeedControl.svelte';

	const inputId = 'custom-speed-input';

	let value = '1';
	$: floatValue = parseFloat(value);
	$: speed = Number.isFinite(floatValue) ? floatValue : 1;
</script>

<h2 class="flex items-center gap-3">
	<ShuffleIcon class="h-9 w-9" />
	Custom Speed Control
</h2>

<p>
	Use the input available below to create a custom speed control. Use values between <code>0</code>
	and
	<code>1</code> for a slowdown effect (for example, <code>0.28</code>); use values greater than
	<code>1</code>
	for a speedup effect (for example, <code>1.2</code>).
</p>

<div class="not-prose grid grid-cols-1 gap-4 mt-6 sm:gap-6 sm:grid-cols-2">
	<div>
		<label for={inputId} class=" sr-only"> Custom speed value </label>
		<input
			id={inputId}
			name={inputId}
			type="text"
			class="input input-lg w-full max-w-xs border-neutral border-2 bg-neutral text-neutral-content"
			bind:value
		/>
	</div>
	<SpeedControl {speed} />
</div>
