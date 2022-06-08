import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header>company name</header>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}
