import Grid from '@material-ui/core/Grid';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection, Spacer} from '../components/common';
import {Link, graphql} from 'gatsby';

export default function Projects(props) {
  return (
    <Layout>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <ConstrainedSection>
        <Typography variant="h2" gutterBottom>
          I made this
        </Typography>
        <Typography variant="subtitle1">
          Projects that I&apos;ve worked on over the years
        </Typography>
        <Spacer />
        <Grid container spacing={40}>
          {props.data.allMarkdownRemark.edges.map(({node}) => {
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
      </ConstrainedSection>
    </Layout>
  );
}

Projects.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
    allMarkdownRemark {
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
