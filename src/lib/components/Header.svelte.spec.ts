import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Header from './Header.svelte';

const cv = {
	name: 'Jane Doe',
	headline: 'Full-stack developer',
	location: 'Bogotá',
	email: 'jane@example.com',
	sections: {},
	social_networks: [
		{ network: 'GitHub' as const, username: 'janedoe' },
		{ network: 'LinkedIn' as const, username: 'jane-doe' }
	]
};

describe('Header.svelte', () => {
	it('renders navbar with name', async () => {
		render(Header, { cv });
		await expect.element(page.getByText('Jane Doe')).toBeInTheDocument();
	});

	it('renders language toggle button with flag', async () => {
		render(Header, { cv });
		const button = page.getByRole('button', { name: 'Toggle language' });
		await expect.element(button).toBeInTheDocument();
		await expect.element(button).toBeInTheDocument();
	});

	it('renders social network links', async () => {
		render(Header, { cv });
		const ghLink = page.getByRole('link', { name: 'GitHub' });
		const liLink = page.getByRole('link', { name: 'LinkedIn' });
		await expect.element(ghLink).toHaveAttribute('href', 'https://github.com/janedoe');
		await expect.element(liLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jane-doe/');
	});

	it('social links open in new tab', async () => {
		render(Header, { cv });
		const link = page.getByRole('link', { name: 'GitHub' });
		await expect.element(link).toHaveAttribute('target', '_blank');
		await expect.element(link).toHaveAttribute('rel', 'noopener noreferrer');
	});

	it('renders SVG icons inside social links', async () => {
		render(Header, { cv });
		const ghLink = page.getByRole('link', { name: 'GitHub' });
		await expect.element(ghLink).toBeInTheDocument();
	});
});
