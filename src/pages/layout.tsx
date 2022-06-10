import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "rakkasjs";

const MainLayout: Layout = ({ children, meta }) => (
  <>
    <Helmet title={meta.title} />
    <header>company name</header>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
  </>
);

export default MainLayout;
