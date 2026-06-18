<script lang="ts">
	let { headline, location, email }: { headline?: string; location?: string; email?: string } =
		$props();
</script>

<div class="mb-10">
	{#if headline}
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">{headline}</p>
	{/if}
	<div class="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm text-gray-500 dark:text-gray-500">
		{#if location}
			<span>📍 {location}</span>
		{/if}
		{#if email}
			<span
				>✉️ <a href="mailto:{email}" class="hover:text-gray-700 dark:hover:text-gray-300 underline"
					>{email}</a
				></span
			>
		{/if}
	</div>
</div>
