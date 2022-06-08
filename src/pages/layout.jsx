import React from "react";
import { Helmet } from "react-helmet-async";

export default function Layout({ children, meta }) {
  return (
    <>
      <Helmet title={meta.title} />
      <header>company name</header>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}
