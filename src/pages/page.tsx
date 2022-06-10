import React from "react";
import { Page } from "rakkasjs";

const HomePage: Page = () => {
  return (
    <main>
      <h1>Hello world!</h1>
      <p>Welcome to Rakkas.JS demo page.</p>
      <p>
        Try editing <code>src/pages/page.jsx</code> to get started or go to the{" "}
        <a href="https://rakkasjs.org" target="_blank" rel="noreferrer">
          website
        </a>
        .
      </p>
    </main>
  );
};

export default HomePage;
