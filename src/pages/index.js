import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import {Box, Divider, Grid, Typography} from '@material-ui/core';
import {Button} from 'gatsby-theme-material-ui';
import {GoStar} from 'react-icons/go';
import {graphql} from 'gatsby';
// import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';

export default function Home(props) {
  const {y} = useWindowScroll();
  console.log(y);
  return (
    <Layout disableHeader>
      <Box bgcolor="black" color="white">
        <Box
          display="flex"
          alignItems="center"
          px={3}
          height={64}
          color="white"
          position="sticky"
          top={0}
          zIndex="appBar"
          style={{
            backgroundColor: y > 100 ? 'black' : 'transparent'
          }}
        >
          <Typography variant="h5">Trevor Blades</Typography>
        </Box>
        <Box p={8} height={`calc(100vh - ${64 * 2}px)`}>
          Stuff
        </Box>
        <Box p={8} color="initial" bgcolor="background.default">
          <Box mt={-16 - 2.5}>
            <Grid container spacing={5}>
              {props.data.allMdx.edges.map(({node}) => {
                const {publicURL} = node.frontmatter.image;
                return (
                  <Grid item xs={4} key={node.id}>
                    <Box
                      pb="100%"
                      mb={2}
                      position="relative"
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: [
                          'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.6))',
                          `url(${publicURL})`
                        ]
                      }}
                    />
                    <Typography gutterBottom variant="h4">
                      {node.frontmatter.title}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            Not impressed? Want to see more?
          </Typography>
          <Button
            color="primary"
            to="/projects"
            size="large"
            variant="contained"
          >
            All projects
          </Button>
        </Box>
        <Divider />
        <div>
          <Typography variant="h3" gutterBottom>
            Open source
          </Typography>
          <Typography paragraph variant="subtitle1">
            A handful of my open source projects
          </Typography>
          {props.data.github.repositoryOwner.pinnedRepositories.edges.map(
            ({node}) => (
              <div key={node.id}>
                <div>
                  <Typography variant="h6" component="a" href={node.url}>
                    {node.name}
                  </Typography>
                  <div>
                    <GoStar />
                    <Typography>{node.stargazers.edges.length}</Typography>
                  </div>
                </div>
                <Typography>{node.description}</Typography>
              </div>
            )
          )}
        </div>
      </Box>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
    allMdx(filter: {frontmatter: {featured: {eq: true}}}) {
      edges {
        node {
          id
          fields {
            path
          }
          frontmatter {
            title
            summary
            image {
              publicURL
            }
          }
        }
      }
    }
    github {
      repositoryOwner(login: "trevorblades") {
        pinnedRepositories(first: 6) {
          edges {
            node {
              id
              name
              description
              url
              stargazers(first: 100) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
