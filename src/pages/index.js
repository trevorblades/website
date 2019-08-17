import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import ice from '../assets/ice.jpg';
// import useWindowScroll from 'react-use/lib/useWindowScroll';
import {Box, Divider, Grid, Typography, useTheme} from '@material-ui/core';
import {Button, IconButton, Link} from 'gatsby-theme-material-ui';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {GoStar} from 'react-icons/go';
import {graphql} from 'gatsby';

const sectionPadding = 8;
const gridSpacing = 5;

export default function Home(props) {
  // const {y} = useWindowScroll();
  const {spacing} = useTheme();
  console.log(spacing(sectionPadding));
  return (
    <Layout disableHeader>
      {/* <Box
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
        </Box> */}
      <Box
        p={sectionPadding}
        height={`calc(100vh - ${spacing(sectionPadding)}px)`}
        display="flex"
        alignItems="center"
        bgcolor="black"
        color="white"
        style={{
          backgroundImage: `url(${ice})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div>
          <Typography display="block" variant="overline">
            I&apos;m Trevor, and I like to
          </Typography>
          <Typography paragraph variant="h1">
            design/build stuff
          </Typography>
          <Box ml={-1.5}>
            <IconButton color="inherit" href="https://github.com/trevorblades">
              <FaGithub size={40} />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com/trevorblades">
              <FaTwitter size={40} />
            </IconButton>
            <IconButton color="inherit" href="https://twitch.com/trevorblades">
              <FaTwitch size={40} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com/trevorblades"
            >
              <FaInstagram size={40} />
            </IconButton>
          </Box>
        </div>
      </Box>
      <Box p={sectionPadding}>
        <Box mt={sectionPadding * -2 - gridSpacing / 2}>
          <Grid container spacing={gridSpacing}>
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
                  <Typography variant="h4">{node.frontmatter.title}</Typography>
                  <Typography paragraph variant="subtitle1">
                    {node.frontmatter.summary}
                  </Typography>
                  <Button variant="outlined" size="small" to={node.fields.path}>
                    View project
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Divider />
      <Box p={sectionPadding}>
        <Typography display="block" variant="overline">
          Some open source projects
        </Typography>
        <Typography variant="h2" gutterBottom>
          that I&apos;m proud of
        </Typography>
        {props.data.github.repositoryOwner.pinnedRepositories.edges.map(
          ({node}) => (
            <Box mt={3} key={node.id}>
              <Box mb={1} display="flex" alignItems="center">
                <Link color="inherit" variant="h6" href={node.url}>
                  {node.name}
                </Link>
                <Box ml={1} display="flex" alignItems="center">
                  <GoStar style={{marginRight: 4}} />
                  <Typography>{node.stargazers.edges.length}</Typography>
                </Box>
              </Box>
              <Typography>{node.description}</Typography>
            </Box>
          )
        )}
      </Box>
      <Divider />
      <Box textAlign="center" p={sectionPadding}>
        <Box mb={8}>
          <Typography gutterBottom variant="h3">
            Call me maybe
          </Typography>
          <Typography>
            Want to get in touch? Send me an email at{' '}
            <Link href="mailto:tdblades@gmail.com">tdblades@gmail.com</Link>.
          </Typography>
        </Box>
        <Typography paragraph component="span" display="block" variant="h2">
          🔪
        </Typography>
        <Typography variant="subtitle2">
          &copy; {new Date().getFullYear()} Trevor Blades
        </Typography>
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
