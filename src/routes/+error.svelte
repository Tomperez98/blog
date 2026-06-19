<script lang="ts">
	let { data } = $props();
</script>

<svelte:head><title>Error — {data.status}</title></svelte:head>

<main class="mx-auto max-w-xl px-4 py-24 text-center">
	<p class="font-mono text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400">
		Error {data.status}
	</p>
	<h1 class="mt-3 font-serif text-4xl text-gray-900 dark:text-gray-50">{data.message}</h1>

	{#if data.status === 500}
		<pre
			class="mt-6 overflow-x-auto rounded bg-gray-100 p-3 text-left text-sm whitespace-pre-wrap dark:bg-gray-800">{data
				.error?.stack ?? data.message}</pre>
	{/if}
</main>
