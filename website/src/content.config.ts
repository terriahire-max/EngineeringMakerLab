import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectAnswer = z.object({
  question: z.string(),
  answer: z.string(),
});

const contentDates = {
  publishedDate: z.coerce.date(),
  updatedDate: z.coerce.date(),
};

const contentLink = z.object({
  title: z.string(),
  href: z.string(),
});

const socialImage = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    ...contentDates,
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    difficulty: z.enum(['Beginner', 'Easy', 'Intermediate', 'Advanced']),
    estimatedTime: z.string(),
    estimatedCost: z.string(),
    platform: z.string(),
    recommendedProductId: z.string(),
    featuredImage: z.object({
      src: z.string().optional(),
      alt: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    }),
    tags: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    recommendedFor: z.array(z.enum(['Middle School', 'High School', 'Adult Beginners', 'Homeschool'])).default(['Middle School', 'High School', 'Adult Beginners', 'Homeschool']),
    learningPathOrder: z.number().int().positive().optional(),
    learningGoals: z.array(z.string()).min(1),
    parts: z.array(
      z.object({
        quantity: z.string(),
        name: z.string(),
        notes: z.string(),
      }),
    ).min(1),
    circuit: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      alt: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    }),
    code: z.object({
      filename: z.string(),
      language: z.enum(['cpp', 'javascript', 'python']),
      content: z.string(),
    }),
    troubleshooting: z.array(projectAnswer).min(1),
    faq: z.array(projectAnswer).min(1),
    relatedTutorials: z.array(contentLink).min(1),
    relatedBuyingGuide: contentLink,
    relatedProjects: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        difficulty: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    ...contentDates,
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    featuredImage: socialImage.optional(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    estimatedTime: z.string(),
    tags: z.array(z.string()).min(1),
    order: z.number(),
    featured: z.boolean().default(false),
    relatedTutorials: z.array(
      z.object({
        title: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

const buyingGuides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/buying-guides' }),
  schema: z.object({
    ...contentDates,
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    featuredImage: socialImage.optional(),
    audience: z.string(),
    productIds: z.array(z.string()),
    tags: z.array(z.string()).min(1),
  }),
});

export const collections = { projects, tutorials, buyingGuides };
