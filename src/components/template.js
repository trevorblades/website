import Footer from './footer';
import Layout from './layout';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, Divider, Typography, styled} from '@material-ui/core';
import {Link} from 'gatsby-theme-material-ui';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import {withProps} from 'recompose';

const components = {
  p: withProps({paragraph: true})(Typography),
  img: styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  })
};

export default function Template(props) {
  const {frontmatter, body} = props.data.mdx;
  return (
    <Layout>
      <Box
        px={3}
        height={64}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.paper"
      >
        <Link color="inherit" to="/" variant="h5">
          Trevor&apos;s website
        </Link>
      </Box>
      <Box p={8}>
        <Typography display="block" variant="overline" color="inherit">
          <Link to="/" color="inherit">
            &lt; Go back
          </Link>
        </Typography>
        <Typography variant="h3" gutterBottom>
          {frontmatter.title}
        </Typography>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
      <Divider />
      <Footer />
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`;
