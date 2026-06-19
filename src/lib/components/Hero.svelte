<script lang="ts">
	let { headline, location, email }: { headline?: string; location?: string; email?: string } =
		$props();
</script>

<div class="mb-14 border-b border-gray-200 pb-10 dark:border-gray-800">
	{#if headline}
		<p class="max-w-2xl font-serif text-3xl leading-snug text-gray-900 dark:text-gray-50">
			{headline}
		</p>
	{/if}
	<div
		class="mt-5 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-gray-600"
	>
		{#if location}
			<span>📍 {location}</span>
		{/if}
		{#if email}
			<span
				>✉️ <a
					href="mailto:{email}"
					class="underline transition-colors hover:text-primary-600 dark:hover:text-primary-400"
					>{email}</a
				></span
			>
		{/if}
	</div>
</div>
