import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Summary from './Summary.svelte';

describe('Summary.svelte', () => {
	it('renders heading', async () => {
		render(Summary, { paragraphs: ['Short bio.'] });
		await expect.element(page.getByText('Summary')).toBeInTheDocument();
	});

	it('renders all paragraphs', async () => {
		render(Summary, { paragraphs: ['First.', 'Second.', 'Third.'] });
		await expect.element(page.getByText('First.')).toBeInTheDocument();
		await expect.element(page.getByText('Second.')).toBeInTheDocument();
		await expect.element(page.getByText('Third.')).toBeInTheDocument();
	});

	it('heading is h2 with uppercase tracking', async () => {
		render(Summary, { paragraphs: ['Test.'] });
		const heading = page.getByRole('heading', { level: 2 });
		await expect(heading).toHaveTextContent('Summary');
		await expect(heading).toHaveClass(/uppercase/);
		await expect(heading).toHaveClass(/tracking-wider/);
	});
});
