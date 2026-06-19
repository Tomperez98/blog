import { PostMetadataSchema } from '$lib/schemas/post';

const modules = import.meta.glob('./posts/*.{md,svx}');

const slugFromPath = (path: string) =>
	path
		.split('/')
		.pop()!
		.replace(/\.(md|svx)$/, '');

export async function load() {
	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, loader]) => {
			const { metadata } = (await loader()) as { metadata: unknown };
			return { slug: slugFromPath(path), ...PostMetadataSchema.parse(metadata) };
		})
	);

	posts.sort((a, b) => b.date.getTime() - a.date.getTime());
	return { posts };
}
