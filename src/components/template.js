import Footer from './footer';
import Layout from './layout';
import PropTypes from 'prop-types';
import React from 'react';
import rehypeReact from 'rehype-react';
import {
  Box,
  Divider,
  GridList,
  GridListTile,
  Typography
} from '@material-ui/core';
import {Link} from 'gatsby-theme-material-ui';
import {graphql} from 'gatsby';
import {withProps} from 'recompose';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: withProps({paragraph: true})(Typography),
    a: Link
  }
}).Compiler;

export default function Template(props) {
  const {frontmatter, htmlAst} = props.data.markdownRemark;
  return (
    <Layout>
      <Box
        px={3}
        height={64}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.paper"
        position="sticky"
        top={0}
        zIndex="appBar"
      >
        <Link underline="none" color="inherit" to="/" variant="h4">
          🔪
        </Link>
      </Box>
      <Box p={8}>
        <Typography display="block" variant="overline" color="inherit">
          <Link to="/" color="inherit">
            &lt; Back to home
          </Link>
        </Typography>
        <Typography variant="h3" gutterBottom>
          {frontmatter.title}
        </Typography>
        {frontmatter.images && (
          <Box mb={4}>
            <GridList cellHeight={400} cols={3}>
              {frontmatter.images.map((image, index) => (
                <GridListTile cols={image.cols} key={index}>
                  <img src={image.src.publicURL} alt={image.alt} />
                </GridListTile>
              ))}
            </GridList>
          </Box>
        )}
        {renderAst(htmlAst)}
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
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        images {
          src {
            publicURL
          }
          alt
          cols
        }
      }
      htmlAst
    }
  }
`;
