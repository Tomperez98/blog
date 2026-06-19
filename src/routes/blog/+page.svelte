<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	let { data } = $props();

	const fmt = new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', year: 'numeric' });
</script>

<main class="mx-auto max-w-3xl px-4 py-16">
	<ul class="border-t border-gray-200 dark:border-gray-800">
		{#each data.posts as post, i (post.slug)}
			<li>
				<a
					href={resolve(`/blog/${post.slug}` as Pathname)}
					class="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 border-b border-gray-200 py-7 transition-colors hover:bg-primary-50/60 dark:border-gray-800 dark:hover:bg-primary-900/10"
				>
					<span
						class="font-mono text-sm tabular-nums text-gray-400 transition-colors group-hover:text-primary-600 dark:text-gray-600 dark:group-hover:text-primary-400"
					>
						{String(i + 1).padStart(2, '0')}
					</span>

					<div class="min-w-0">
						<h2
							class="font-serif text-2xl leading-snug text-gray-900 transition-transform duration-200 group-hover:translate-x-1 dark:text-gray-50"
						>
							{post.title}
							<span
								class="inline-block translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 text-primary-600 dark:text-primary-400"
								aria-hidden="true">&rarr;</span
							>
						</h2>
						{#if post.description}
							<p class="mt-1 text-gray-500 dark:text-gray-400">{post.description}</p>
						{/if}
					</div>

					<time
						datetime={post.date.toISOString()}
						class="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600"
					>
						{fmt.format(post.date)}
					</time>
				</a>
			</li>
		{:else}
			<li class="py-16 text-center text-gray-400 dark:text-gray-600">No posts yet.</li>
		{/each}
	</ul>
</main>
