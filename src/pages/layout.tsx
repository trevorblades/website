import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "rakkasjs";

const MainLayout: Layout = ({ children, meta }) => (
  <>
    <Helmet title={meta.title} />
    <header>Acme Inc.</header>
    <main>{children}</main>
    <footer>&copy; {new Date().getFullYear()}</footer>
  </>
);

export default MainLayout;
