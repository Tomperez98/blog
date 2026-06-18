import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Education from './Education.svelte';

const fixtures = [
	{
		institution: 'Universidad Nacional',
		area: 'Computer Science',
		degree: 'B.Sc.',
		location: 'Bogotá'
	},
	{
		institution: 'MIT',
		area: 'Data Science',
		degree: 'M.Sc.',
		location: 'Cambridge'
	}
];

describe('Education.svelte', () => {
	it('renders heading', async () => {
		render(Education, { education: fixtures });
		await expect.element(page.getByText('Education')).toBeInTheDocument();
	});

	it('renders all education cards', async () => {
		render(Education, { education: fixtures });
		await expect.element(
			page.getByRole('heading', { level: 3, name: 'Universidad Nacional' })
		).toBeInTheDocument();
		await expect.element(
			page.getByRole('heading', { level: 3, name: 'MIT' })
		).toBeInTheDocument();
	});

	it('shows institution as h3', async () => {
		render(Education, { education: fixtures });
		await expect.element(
			page.getByRole('heading', { level: 3, name: 'Universidad Nacional' })
		).toBeInTheDocument();
		await expect.element(
			page.getByRole('heading', { level: 3, name: 'MIT' })
		).toBeInTheDocument();
	});

	it('shows degree in area', async () => {
		render(Education, { education: fixtures });
		await expect
			.element(page.getByText('B.Sc. in Computer Science'))
			.toBeInTheDocument();
		await expect
			.element(page.getByText('M.Sc. in Data Science'))
			.toBeInTheDocument();
	});

	it('shows location', async () => {
		render(Education, { education: fixtures });
		await expect.element(page.getByText('Bogotá')).toBeInTheDocument();
		await expect.element(page.getByText('Cambridge')).toBeInTheDocument();
	});
});
