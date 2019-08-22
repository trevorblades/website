import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import {Helmet} from 'react-helmet';
import {theme} from '@trevorblades/mui-theme';

export default function TopLayout(props) {
  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap"
        />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node.isRequired
};
