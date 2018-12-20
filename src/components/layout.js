import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './footer';
import Header from './header';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import theme from '@trevorblades/mui-theme';
import {Global} from '@emotion/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {StaticQuery, graphql} from 'gatsby';

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const {title} = data.site.siteMetadata;
        return (
          <Fragment>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Global
                styles={{
                  a: {
                    color: 'inherit',
                    ':hover': {
                      textDecoration: 'none'
                    }
                  },
                  'img.emoji': {
                    width: '1.25em',
                    height: '1.25em',
                    marginLeft: '0.1em',
                    marginRight: '0.05em',
                    verticalAlign: '-0.25em'
                  }
                }}
              />
              <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
                <link rel="shortcut icon" src="/favicon.ico" />
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
                />
              </Helmet>
              {!props.disableHeader && <Header />}
              {props.children}
              {!props.disableFooter && <Footer />}
            </MuiThemeProvider>
          </Fragment>
        );
      }}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disableHeader: PropTypes.bool,
  disableFooter: PropTypes.bool
};
