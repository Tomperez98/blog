import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Experience from './Experience.svelte';

const fixtures = [
	{
		company: 'Acme Corp',
		position: 'Senior Frontend Engineer',
		start_date: '2022-03',
		end_date: '',
		location: 'Remote',
		summary: 'Led migration to SvelteKit.'
	},
	{
		company: 'Startup Inc',
		position: 'Full-stack Developer',
		start_date: '2020-01',
		end_date: '2022-02',
		location: '',
		summary: 'Built real-time features.'
	}
];

describe('Experience.svelte', () => {
	it('renders heading', async () => {
		render(Experience, { experience: fixtures });
		await expect.element(page.getByText('Experience')).toBeInTheDocument();
	});

	it('renders both entries with company as heading', async () => {
		render(Experience, { experience: fixtures });
		await expect
			.element(page.getByRole('heading', { level: 3, name: 'Acme Corp' }))
			.toBeInTheDocument();
		await expect
			.element(page.getByRole('heading', { level: 3, name: 'Startup Inc' }))
			.toBeInTheDocument();
	});

	it('shows position and location separated by middle dot', async () => {
		render(Experience, { experience: fixtures });
		await expect.element(page.getByText('Senior Frontend Engineer')).toBeInTheDocument();
		await expect.element(page.getByText('· Remote')).toBeInTheDocument();
	});

	it('shows "Present" when end_date empty', async () => {
		render(Experience, { experience: fixtures });
		await expect.element(page.getByText('2022-03 — Present')).toBeInTheDocument();
	});

	it('shows end date when provided', async () => {
		render(Experience, { experience: fixtures });
		await expect.element(page.getByText('2020-01 — 2022-02')).toBeInTheDocument();
	});

	it('shows summary text', async () => {
		render(Experience, { experience: fixtures });
		await expect.element(page.getByText('Led migration to SvelteKit.')).toBeInTheDocument();
	});
});
