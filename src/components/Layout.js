import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';

export default function Layout({children}) {
  return (
    <>
      <Helmet titleTemplate="%s - Trevor Blades" defaultTitle="Trevor Blades">
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/kitchen-knife_1f52a.png"
        />
        {/* TODO: add og tags */}
      </Helmet>
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
