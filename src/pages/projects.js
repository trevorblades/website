import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Helmet} from 'react-helmet';
import {Link, graphql} from 'gatsby';

export default function Projects(props) {
  return (
    <Layout>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Grid container spacing={40}>
        {props.data.allMdx.edges.map(({node}) => {
          const {path} = node.fields;
          const {title, summary} = node.frontmatter;
          return (
            <Grid item xs={12} sm={6} md={4} key={path}>
              <Typography gutterBottom variant="h5">
                <Link to={path}>{title}</Link>
              </Typography>
              <Typography>{summary}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

Projects.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            summary
          }
        }
      }
    }
  }
`;
