import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
  sidebarLabel: z.string().optional(),
});

const caseStudy = defineCollection({
  loader: glob({ base: "./src/content/case-study", pattern: "**/*.{md,mdx}" }),
  schema: pageSchema,
});

const getStarted = defineCollection({
  loader: glob({
    base: "./src/content/get-started",
    pattern: "**/*.{md,mdx}",
  }),
  schema: pageSchema,
});

export const collections = { caseStudy, getStarted };
