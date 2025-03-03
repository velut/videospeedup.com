<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="grid min-h-svh auto-cols-fr grid-rows-[auto_1fr_auto] gap-6">
	<Navbar />
	<div>
		{@render children()}
	</div>
	<Footer />
</div>
