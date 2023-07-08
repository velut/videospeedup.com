<script>
	import { projectNameStylized } from '$lib/metadata';
	import FastForwardIcon from './FastForwardIcon.svelte';
</script>

<div class="navbar bg-base-200">
	<a href="/" class="btn btn-ghost normal-case text-xl">
		<FastForwardIcon class="h-6 w-6" />
		{projectNameStylized}</a
	>
</div>
