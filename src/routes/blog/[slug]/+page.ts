import { PostMetadataSchema } from '$lib/schemas/post';

const modules = import.meta.glob('../posts/*.{md,svx}');

const slugFromPath = (path: string) =>
	path
		.split('/')
		.pop()!
		.replace(/\.(md|svx)$/, '');

interface PostModule {
	default: ConstructorOfATypedSvelteComponent;
	metadata: unknown;
}

export async function load({ params }) {
	for (const [path, loader] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			const post = (await loader()) as PostModule;
			return { content: post.default, metadata: PostMetadataSchema.parse(post.metadata) };
		}
	}

	throw new Response('Not found', { status: 404 });
}
