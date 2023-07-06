<script lang="ts">
	import HowTo from '$lib/components/HowTo.svelte';
	import Metadata from '$lib/components/Metadata.svelte';
	import { projectNameStylized } from '$lib/metadata';
</script>

<Metadata
	title="Watch videos faster"
	description="With {projectNameStylized} you can watch videos faster."
/>

<main class="flex items-center justify-center p-4 sm:p-8">
	<article class="prose">
		<HowTo />
		<div class="divider" />
	</article>
</main>
