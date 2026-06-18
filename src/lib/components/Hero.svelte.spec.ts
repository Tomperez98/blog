import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Hero from './Hero.svelte';

describe('Hero.svelte', () => {
	it('renders headline when provided', async () => {
		render(Hero, { headline: 'Full-stack developer' });
		await expect.element(page.getByText('Full-stack developer')).toBeInTheDocument();
	});

	it('does not render headline when absent', async () => {
		render(Hero, {});
		await expect
			.element(page.getByText('Full-stack developer'))
			.not.toBeInTheDocument();
	});

	it('renders location with pin emoji', async () => {
		render(Hero, { location: 'Bogotá' });
		await expect.element(page.getByText('📍 Bogotá')).toBeInTheDocument();
	});

	it('renders email with mailto link', async () => {
		render(Hero, { email: 'jane@example.com' });
		await expect.element(page.getByText('✉️')).toBeInTheDocument();
		const link = page.getByRole('link', { name: 'jane@example.com' });
		await expect.element(link).toHaveAttribute('href', 'mailto:jane@example.com');
	});

	it('renders both location and email together', async () => {
		render(Hero, { location: 'Bogotá', email: 'jane@example.com' });
		await expect.element(page.getByText('📍 Bogotá')).toBeInTheDocument();
		await expect.element(page.getByText('jane@example.com')).toBeInTheDocument();
	});
});
