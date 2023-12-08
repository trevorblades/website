import { Title } from "@mantine/core";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import React from "react";

import { getPosts } from "~/posts";

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getPosts();

  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Title>{post.frontmatter.title}</Title>
      <Title order={2}>{post.frontmatter.description}</Title>
      <Title order={3}>{format(post.frontmatter.date, "PPP")}</Title>
      {post.content}
    </>
  );
}
