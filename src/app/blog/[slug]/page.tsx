import { Title } from "@mantine/core";
import { format } from "date-fns";
import React from "react";

import { getPostForSlug, getPostSlugs } from "~/posts";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPostForSlug(params.slug);
  return {
    title: post.frontmatter.title,
  };
};

export const generateStaticParams = async () => {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostForSlug(params.slug);
  return (
    <>
      <Title>{post.frontmatter.title}</Title>
      <Title order={2}>{post.frontmatter.description}</Title>
      <Title order={3}>{format(post.frontmatter.date, "PPP")}</Title>
      {post.content}
    </>
  );
}
