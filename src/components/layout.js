import Footer from './footer';
import Header from './header';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {Global} from '@emotion/core';
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
            <Global
              styles={{
                a: {
                  color: 'inherit',
                  ':hover': {
                    textDecoration: 'none'
                  }
                },
                'img.emoji': {
                  width: '1em',
                  height: '1em',
                  marginLeft: '0.1em',
                  marginRight: '0.05em',
                  verticalAlign: '-0.1em'
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
