import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';

export default function Layout({children}) {
  return (
    <>
      <Helmet titleTemplate="%s - Trevor Blades" defaultTitle="Trevor Blades">
        {/* TODO: add favicon, og tags */}
      </Helmet>
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
