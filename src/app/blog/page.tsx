import { List, ListItem, Title } from "@mantine/core";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { getPosts } from "~/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div>
      <Title>Blog</Title>
      <List>
        {posts.map((post) => (
          <ListItem key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
