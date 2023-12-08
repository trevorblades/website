import { List, ListItem, Title } from "@mantine/core";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { getPostSlugs } from "./[slug]/page";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const slugs = await getPostSlugs();
  return (
    <div>
      <Title>Blog</Title>
      <List>
        {slugs.map((slug) => (
          <ListItem key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
