<script lang="ts">
	import { licenses } from '$lib/licenses';
</script>

<main class="flex items-center justify-center p-4 sm:p-8">
	<article class="prose">
		<hr />
		<h1 class="my-0 text-center">Software licenses</h1>
		<hr />

		<p>This is a list of third-party software and libraries used on VideoSpeedup.com.</p>

		<ul>
			{#each licenses as license}
				<li>
					<a href={license.url} class="link-hover link font-bold">
						{license.name}
					</a>

					<p>
						Version: {license.version}
						<br />
						License: {license.license}
					</p>

					{#if license.licenseText}
						<pre class="w-64 sm:w-full">
							{license.licenseText}
						</pre>
					{/if}
				</li>
			{/each}
		</ul>

		<hr />
	</article>
</main>
