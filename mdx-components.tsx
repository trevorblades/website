import { Text, Title } from "@mantine/core";
import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Title order={1}>{children}</Title>,
    p: ({ children }) => <Text>{children}</Text>,
    ...components,
  };
}
