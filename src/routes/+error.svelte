<script lang="ts">
	let { data } = $props();
</script>

<svelte:head><title>Error — {data.status}</title></svelte:head>

<main class="max-w-xl mx-auto px-4 py-16 text-center">
	<h1 class="text-2xl font-bold text-red-600">{data.status}</h1>
	<p class="mt-2 text-gray-700">{data.message}</p>

	{#if data.status === 500}
		<pre
			class="mt-4 p-3 bg-gray-100 rounded text-left text-sm overflow-x-auto whitespace-pre-wrap">{data
				.error?.stack ?? data.message}</pre>
	{/if}
</main>
