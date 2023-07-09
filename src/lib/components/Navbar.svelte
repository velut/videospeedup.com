<script>
	import { projectNameStylized } from '$lib/metadata';
	import fastForwardButton from '@iconify/icons-noto/fast-forward-button';
	import Icon from '@iconify/svelte';
</script>

<div class="navbar bg-base-200">
	<a href="/" class="btn btn-ghost normal-case text-xl">
		<Icon icon={fastForwardButton} width="24" height="24" />
		{projectNameStylized}</a
	>
</div>
