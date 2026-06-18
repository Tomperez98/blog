<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	let { paragraphs }: { paragraphs: string[] } = $props();
</script>

<section class="mb-10">
	<h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
		{m.about_heading()}
	</h2>
	{#each paragraphs as p, i (i)}
		<p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 last:mb-0">{p}</p>
	{/each}
</section>
