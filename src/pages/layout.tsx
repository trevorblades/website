import React from "react";
import { Components } from "@mdx-js/react/lib";
import { Helmet } from "react-helmet-async";
import { Layout } from "rakkasjs";
import { Link } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

const components: Components = {
  a: Link,
  h1: "h3",
};

const MainLayout: Layout = ({ children, meta }) => (
  <>
    <Helmet title={meta.title} />
    <header>Acme Inc.</header>
    <main>
      <MDXProvider components={components}>{children}</MDXProvider>
    </main>
    <footer>&copy; {new Date().getFullYear()}</footer>
  </>
);

export default MainLayout;
