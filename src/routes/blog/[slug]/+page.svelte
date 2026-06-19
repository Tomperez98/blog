<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();

	const fmt = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' });
</script>

{#if data.content}
	{@const Content = data.content}
	<article class="mx-auto max-w-3xl px-4 py-16">
		<a
			href={resolve('/blog')}
			class="font-mono text-xs uppercase tracking-wider text-gray-400 transition-colors hover:text-primary-600 dark:text-gray-600 dark:hover:text-primary-400"
			>&larr; All posts</a
		>
		<header class="mt-6 mb-10 border-b border-gray-200 pb-10 dark:border-gray-800">
			<time
				datetime={data.metadata.date.toISOString()}
				class="font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600"
				>{fmt.format(data.metadata.date)}</time
			>
			<h1 class="mt-3 font-serif text-4xl leading-tight text-gray-900 dark:text-gray-50">
				{data.metadata.title}
			</h1>
			{#if data.metadata.description}
				<p class="mt-3 text-lg text-gray-500 dark:text-gray-400">{data.metadata.description}</p>
			{/if}
		</header>

		<div class="prose dark:prose-invert max-w-none">
			<Content />
		</div>
	</article>
{/if}
