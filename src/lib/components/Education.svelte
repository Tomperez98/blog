<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { EducationSchema } from '$lib/schemas';
	import type { z } from 'zod';

	let { education }: { education: z.infer<typeof EducationSchema>[] } = $props();
</script>

<section class="mb-10">
	<h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
		{m.education_heading()}
	</h2>
	<div class="grid sm:grid-cols-2 gap-4">
		{#each education as edu, i (i)}
			<div class="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
				<h3 class="font-semibold text-gray-900 dark:text-gray-100">{edu.institution}</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.degree} in {edu.area}</p>
				<p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{edu.location}</p>
			</div>
		{/each}
	</div>
</section>
