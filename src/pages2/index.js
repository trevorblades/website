import Header from '../components/header';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';

export default function Pages(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

Pages.propTypes = {
  children: PropTypes.node.isRequired
};
