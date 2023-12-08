import { Button, Text, Title } from "@mantine/core";
import { format } from "date-fns";
import { readFile } from "fs/promises";
import type { MDXComponents } from "mdx/types";
import Head from "next/head";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import React from "react";
import readdirp from "readdirp";
import remarkGfm from "remark-gfm";
import { z } from "zod";

export const getPostSlugs = async () => {
  const posts = await readdirp.promise(
    path.join(process.cwd(), "src", "posts"),
    { fileFilter: "*.mdx" },
  );
  return posts.map((post) =>
    path.basename(post.basename, path.extname(post.basename)),
  );
};

export const generateStaticParams = async () => {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

const components: MDXComponents = {
  h1: ({ children }) => <Title order={1}>{children}</Title>,
  h2: ({ children }) => <Title order={2}>{children}</Title>,
  h3: ({ children }) => <Title order={3}>{children}</Title>,
  h4: ({ children }) => <Title order={4}>{children}</Title>,
  h5: ({ children }) => <Title order={5}>{children}</Title>,
  h6: ({ children }) => <Title order={6}>{children}</Title>,
  p: ({ children }) => <Text>{children}</Text>,
  Button,
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await readFile(
    path.join(process.cwd(), "src", "posts", `${params.slug}.mdx`),
    "utf-8",
  );

  const { content, frontmatter } = await compileMDX({
    source: post,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const { title, description, date } = z
    .object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    })
    .parse(frontmatter);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Title>{title}</Title>
      <Title order={2}>{description}</Title>
      <Title order={3}>{format(date, "PPP")}</Title>
      {content}
    </>
  );
}
