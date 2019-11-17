import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {Typography} from '@material-ui/core';

function Accolade(props) {
  return (
    <Typography gutterBottom variant="h6">
      {props.win ? '🏆' : '🏅'} {props.children}
    </Typography>
  );
}

Accolade.propTypes = {
  win: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired
};

export default function Accolades() {
  return (
    <Fragment>
      <Typography gutterBottom variant="h2">
        accolades
      </Typography>
      <Accolade win>W3 Awards Best in Show (2013)</Accolade>
      <Accolade win>Lotus Awards Best Website or Microsite (2012)</Accolade>
      <Accolade win>Awwwards Site of the Day (2012)</Accolade>
      <Accolade>Webby Awards Honoree (2016, 2013)</Accolade>
    </Fragment>
  );
}
