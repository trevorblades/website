import React from "react";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>this is a blog</header>
      <div>{children}</div>
    </>
  );
}
