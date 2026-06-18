import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Skills from './Skills.svelte';

const fixtures = [
	{ label: 'TypeScript', details: 'advanced' },
	{ label: 'Svelte', details: 'advanced' },
	{ label: 'Rust', details: 'intermediate' }
];

describe('Skills.svelte', () => {
	it('renders heading', async () => {
		render(Skills, { skills: fixtures });
		await expect.element(page.getByText('Skills')).toBeInTheDocument();
	});

	it('renders all skill chips', async () => {
		render(Skills, { skills: fixtures });
		await expect.element(page.getByText('TypeScript')).toBeInTheDocument();
		await expect.element(page.getByText('Svelte')).toBeInTheDocument();
		await expect.element(page.getByText('Rust')).toBeInTheDocument();
	});

	it('each chip shows label bold and details after dot', async () => {
		render(Skills, { skills: fixtures });
		await expect.element(page.getByText('· advanced').first()).toBeInTheDocument();
		const label = page.getByText('TypeScript');
		await expect(label).toHaveClass(/font-medium/);
	});

	it('heading is h2 with uppercase tracking', async () => {
		render(Skills, { skills: fixtures });
		const heading = page.getByRole('heading', { level: 2 });
		await expect(heading).toHaveTextContent('Skills');
		await expect(heading).toHaveClass(/uppercase/);
	});
});
