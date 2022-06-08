import React from "react";
import { Helmet } from "react-helmet-async";

export const Layout = ({ children, context: { title, description } }) => {
  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
};
