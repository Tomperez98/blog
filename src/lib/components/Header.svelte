<script lang="ts">
	import { Navbar, NavBrand, NavUl, NavLi } from 'flowbite-svelte';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import type { CVSchema, SocialNetworkSchema } from '$lib/schemas/cv';
	import { z } from 'zod';
	import { assertNever } from '$lib/utils';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let { cv }: { cv: z.infer<typeof CVSchema>['cv'] } = $props();

	let current = $state(getLocale());

	function socialUrl({ network, username }: z.infer<typeof SocialNetworkSchema>): string {
		switch (network) {
			case 'GitHub':
				return `https://github.com/${username}`;

			case 'LinkedIn':
				return `https://www.linkedin.com/in/${username}/`;

			default:
				assertNever(network);
		}
	}
</script>

<Navbar>
	<NavBrand href="/">
		<button
			class="mr-3 px-2 py-1 text-xs font-semibold rounded border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
			onclick={() => {
				current = current === 'en' ? 'es' : 'en';
				setLocale(current);
			}}
			aria-label="Toggle language"
		>
			<img class="w-4 h-3" src="https://flagcdn.com/{current === 'es' ? 'co' : 'us'}.svg" alt="" />
		</button>
		<span class="self-center font-serif text-xl whitespace-nowrap text-gray-900 dark:text-gray-50"
			>{cv.name}</span
		>
	</NavBrand>

	<div class="mx-auto flex gap-8 font-mono text-xs uppercase tracking-wider">
		<a
			href={resolve('/')}
			class="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
			aria-current={page.url.pathname === '/' ? 'page' : undefined}
			class:text-primary-600={page.url.pathname === '/'}
			class:dark:text-primary-400={page.url.pathname === '/'}>Curriculum</a
		>
		<a
			href={resolve('/blog')}
			class="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
			aria-current={page.url.pathname.startsWith('/blog') ? 'page' : undefined}
			class:text-primary-600={page.url.pathname.startsWith('/blog')}
			class:dark:text-primary-400={page.url.pathname.startsWith('/blog')}>Blog</a
		>
	</div>

	<NavUl>
		{#each cv.social_networks as entry (entry.network)}
			<NavLi
				href={socialUrl(entry)}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={entry.network}
			>
				{#if entry.network === 'LinkedIn'}
					<svg
						class="w-6 h-6 text-gray-800"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
							clip-rule="evenodd"
						/>
						<path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
					</svg>
				{:else if entry.network === 'GitHub'}
					<svg
						class="w-6 h-6 text-gray-800"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					{assertNever(entry.network)}
				{/if}
			</NavLi>
		{/each}
	</NavUl>
</Navbar>
