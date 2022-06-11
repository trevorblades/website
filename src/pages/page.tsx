import React from "react";
import { Link, Page, definePage } from "rakkasjs";

const HomePage: Page = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <p>
        This is a JSX page. Check out <Link href="/about">this MDX page</Link>.
      </p>
    </>
  );
};

export default definePage({
  load: () => ({
    data: undefined,
    meta: { title: "Home page" },
  }),
  Component: HomePage,
});
