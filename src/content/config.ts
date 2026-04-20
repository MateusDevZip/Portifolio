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
    images: z.array(z.string()).optional(),
    order: z.number().optional(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      color: z.enum(['blue', 'green', 'white']).optional(),
    })).optional(),
  })
});

export const collections = { projects };
