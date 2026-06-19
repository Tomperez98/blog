import { z } from 'zod';

export const PostMetadataSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	date: z.coerce.date()
});

export type PostMetadata = z.infer<typeof PostMetadataSchema>;
