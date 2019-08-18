import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

export default function Layout(props) {
  return (
    <Fragment>
      <Helmet defaultTitle="Trevor Blades" titleTemplate="%s - Trevor Blades" />
      {props.children}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
