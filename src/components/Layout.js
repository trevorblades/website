import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <>
      <Helmet
        titleTemplate="%s - Trevor Blades"
        defaultTitle="Trevor Blades' Website"
      >
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/kitchen-knife_1f52a.png"
        />
        <meta property="og:title" content="Trevor Blades" />
        <meta
          property="og:description"
          content="A web developer who is always learning and enjoys helping others learn too"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dybmuhvem/image/upload/v1633972164/tb.png"
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
