import { z } from 'zod';

export const HighlightSchema = z.string().min(1);

export const SkillSchema = z.object({
	label: z.string().min(1),
	details: z.string().min(1)
});

export const ExperienceSchema = z.object({
	company: z.string().min(1),
	position: z.string().min(1),
	start_date: z.string().min(1),
	end_date: z.string(),
	location: z.string(),
	summary: z.string(),
	highlights: z.array(HighlightSchema).optional()
});

export const EducationSchema = z.object({
	institution: z.string().min(1),
	area: z.string().min(1),
	degree: z.string().min(1),
	location: z.string().min(1)
});

export const SocialNetworkSchema = z.object({
	network: z.enum(['LinkedIn', 'GitHub']),
	username: z.string().min(1)
});

export const CVSchema = z.object({
	cv: z.object({
		name: z.string().min(1),
		headline: z.string().optional(),
		location: z.string().optional(),
		email: z.string().optional(),
		phone: z.array(z.string()).optional(),
		social_networks: z.array(SocialNetworkSchema),
		sections: z.object({
			summary: z.array(z.string()).optional(),
			skills: z.array(SkillSchema).optional(),
			experience: z.array(ExperienceSchema).optional(),
			education: z.array(EducationSchema).optional()
		})
	})
});
