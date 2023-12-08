import { Title } from "@mantine/core";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div>
      <Title>Blog</Title>
    </div>
  );
}
