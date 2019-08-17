import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import ice from '../assets/ice.jpg';
import {Box, Divider, Grid, Typography, useTheme} from '@material-ui/core';
import {Button, IconButton, Link} from 'gatsby-theme-material-ui';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {GoStar} from 'react-icons/go';
import {graphql} from 'gatsby';
// import useWindowScroll from 'react-use/lib/useWindowScroll';

const sectionPadding = 8;
const gridSpacing = 5;

export default function Home(props) {
  // const {y} = useWindowScroll();
  const {spacing} = useTheme();
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
          // transform: `translateY(${y / 3}px)`
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
              const {video, title, summary} = node.frontmatter;
              return (
                <Grid item xs={4} key={node.id}>
                  {video && (
                    <Box mb={2}>
                      <video
                        muted
                        width="100%"
                        autoPlay
                        loop
                        src={video.publicURL}
                      />
                    </Box>
                  )}
                  <Typography variant="h4">{title}</Typography>
                  <Typography paragraph variant="subtitle1">
                    {summary}
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
    allMdx(sort: {fields: frontmatter___order, order: DESC}) {
      edges {
        node {
          id
          fields {
            path
          }
          frontmatter {
            title
            summary
            video {
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
