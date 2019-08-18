import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import theme from './theme';
import {CssBaseline} from '@material-ui/core';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from '@material-ui/styles';

export default function TopLayout(props) {
  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node.isRequired
};
