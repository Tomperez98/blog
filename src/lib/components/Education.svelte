<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { EducationSchema } from '$lib/schemas/cv';
	import type { z } from 'zod';

	let { education }: { education: z.infer<typeof EducationSchema>[] } = $props();
</script>

<section class="mb-10">
	<h2 class="mb-4 font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600">
		{m.education_heading()}
	</h2>
	<div class="grid sm:grid-cols-2 gap-4">
		{#each education as edu, i (i)}
			<div class="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
				<h3 class="font-serif text-lg text-gray-900 dark:text-gray-50">{edu.institution}</h3>
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{edu.degree} in {edu.area}</p>
				<p class="mt-1 font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600">
					{edu.location}
				</p>
			</div>
		{/each}
	</div>
</section>
