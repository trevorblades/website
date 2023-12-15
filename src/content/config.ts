import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.strictObject({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.strictObject({
    title: z.string(),
    description: z.string(),
  }),
});

const jobsCollection = defineCollection({
  type: "data",
  schema: z.strictObject({
    company: z.string(),
    url: z.string().url(),
    role: z.string(),
    team: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  jobs: jobsCollection,
};
