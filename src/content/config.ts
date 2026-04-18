import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    category: z.string(),
    description: z.string(),
    color: z.string(),
    technologies: z.array(z.string()).optional(),
    link: z.string().url().optional().nullable(),
  })
});

export const collections = { projects };
