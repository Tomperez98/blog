<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Summary from '$lib/components/Summary.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Education from '$lib/components/Education.svelte';

	let { data } = $props();
	const cv = $derived(data.cv);
</script>

<main class="mx-auto max-w-3xl px-4 py-16">
	<Hero headline={cv.headline} location={cv.location} email={cv.email} />

	{#if cv.sections.summary}
		<Summary paragraphs={cv.sections.summary} />
	{/if}

	{#if cv.sections.skills}
		<Skills skills={cv.sections.skills} />
	{/if}

	{#if cv.sections.experience}
		<Experience experience={cv.sections.experience} />
	{/if}

	{#if cv.sections.education}
		<Education education={cv.sections.education} />
	{/if}
</main>
