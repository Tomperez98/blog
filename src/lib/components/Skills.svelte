<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { SkillSchema } from '$lib/schemas/cv';
	import type { z } from 'zod';

	let { skills }: { skills: z.infer<typeof SkillSchema>[] } = $props();
</script>

<section class="mb-10">
	<h2 class="mb-4 font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600">
		{m.skills_heading()}
	</h2>
	<div class="flex flex-wrap gap-3">
		{#each skills as skill, i (i)}
			<span
				class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm"
			>
				<span class="font-medium text-gray-800 dark:text-gray-200">{skill.label}</span>
				<span class="text-gray-500 dark:text-gray-400">· {skill.details}</span>
			</span>
		{/each}
	</div>
</section>
