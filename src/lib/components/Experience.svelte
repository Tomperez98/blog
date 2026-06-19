<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { ExperienceSchema } from '$lib/schemas/cv';
	import type { z } from 'zod';

	let { experience }: { experience: z.infer<typeof ExperienceSchema>[] } = $props();
</script>

<section class="mb-10">
	<h2 class="mb-6 font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600">
		{m.experience_heading()}
	</h2>
	<div class="space-y-8">
		{#each experience as exp, i (i)}
			<article class="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
				<div
					class="absolute left-0 top-2 w-2.5 h-2.5 translate-x-[5.5px] rounded-full {exp.end_date ===
					'present'
						? 'bg-primary-500'
						: 'bg-secondary-400'}"
				></div>
				<h3 class="font-serif text-xl text-gray-900 dark:text-gray-50">{exp.company}</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					{exp.position}{#if exp.location}
						· {exp.location}{/if}
				</p>
				<p
					class="mt-0.5 font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600"
				>
					{exp.start_date} — {exp.end_date}
				</p>
				<p class="text-gray-700 dark:text-gray-300 mt-2">{exp.summary}</p>
			</article>
		{/each}
	</div>
</section>
