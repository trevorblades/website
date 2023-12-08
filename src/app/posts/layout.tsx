import { Stack } from "@mantine/core";
import React from "react";

export default function PostsLayout({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  console.log(rest);
  return (
    <>
      <header>this is a blog</header>
      <Stack>{children}</Stack>
    </>
  );
}
