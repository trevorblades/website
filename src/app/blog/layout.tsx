import Link from "next/link";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Link href="/">this is a blog</Link>
      </header>
      {children}
    </>
  );
}
