import { Button, Text, Title } from "@mantine/core";
import { readFile } from "fs/promises";
import type { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import React from "react";
import readdirp from "readdirp";
import remarkGfm from "remark-gfm";
import { z } from "zod";

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

export const getPosts = async () => {
  const files = await readdirp.promise(
    path.join(process.cwd(), "src", "posts"),
    { fileFilter: "*.mdx" },
  );

  return Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file.basename, path.extname(file.basename));
      const post = await readFile(
        path.join(process.cwd(), "src", "posts", `${slug}.mdx`),
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

      return {
        slug,
        content,
        frontmatter: z
          .object({
            title: z.string(),
            description: z.string(),
            date: z.date(),
          })
          .parse(frontmatter),
      };
    }),
  );
};
