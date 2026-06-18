import type { RequestEvent } from '@sveltejs/kit';
import { parse } from 'yaml';

export async function load({ fetch }: { fetch: RequestEvent['fetch'] }) {
	const response = await fetch('https://raw.githubusercontent.com/Tomperez98/cv/main/en_CV.yaml');

	if (!response.ok) {
		throw new Error('Failed to load CV');
	}

	const yamlText = await response.text();
	const cv = parse(yamlText);

	return {
		cv
	};
}
