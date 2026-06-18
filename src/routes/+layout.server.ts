import { parse } from 'yaml';
import { GITHUB_TOKEN } from '$env/static/private';
import { getLocale } from '$lib/paraglide/runtime';
import { CVSchema } from '$lib/schemas';

// Prerender at build time: GITHUB_TOKEN stays server-side, data baked into HTML.
export const prerender = true;

export async function load({ fetch }) {
	// getLocale() reads the locale paraglide resolved in this request's context
	const locale = getLocale();

	const response = await fetch(
		`https://api.github.com/repos/Tomperez98/cv/contents/${locale}_CV.yaml`,
		{
			headers: {
				Authorization: `Bearer ${GITHUB_TOKEN}`,
				Accept: 'application/vnd.github.v3+json'
			}
		}
	);

	if (!response.ok) {
		throw new Error(`Failed to load CV (${response.status})`);
	}

	const { content } = await response.json();
	const yamlText = Buffer.from(content, 'base64').toString('utf-8');
	const raw = parse(yamlText);
	const { cv } = CVSchema.parse(raw);

	return { cv };
}
