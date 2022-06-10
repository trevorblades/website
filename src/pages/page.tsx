import React from "react";
import { Link, Page } from "rakkasjs";

const HomePage: Page = () => {
  return (
    <main>
      <h1>Hello world!</h1>
      <p>
        Check out <Link href="/about">this page</Link> per chance.
      </p>
    </main>
  );
};

export default HomePage;

export const load = () => ({ meta: { title: "Home page" } });
