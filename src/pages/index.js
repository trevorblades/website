import Footer from '../components/footer';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import ice from '../assets/ice.jpg';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import {Box, Grid, Typography, makeStyles, useTheme} from '@material-ui/core';
import {
  Button,
  CardActionArea,
  IconButton,
  Link
} from 'gatsby-theme-material-ui';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {GoStar} from 'react-icons/go';
import {graphql} from 'gatsby';

const gridSpacing = 4;
const sectionPadding = 8;

const useStyles = makeStyles({
  hero: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform'
  }
});

export default function Home(props) {
  const {y} = useWindowScroll();
  const {hero} = useStyles();
  const {spacing} = useTheme();
  const {allMarkdownRemark, github} = props.data;
  return (
    <Layout disableHeader>
      <Box
        p={sectionPadding}
        className={hero}
        height={`calc(100vh - ${spacing(sectionPadding)}px)`}
        display="flex"
        alignItems="center"
        bgcolor="black"
        color="white"
        style={{
          backgroundImage: `url(${ice})`,
          transform: `translateY(${y / 3}px)`
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
      <Box p={sectionPadding} bgcolor="background.default" position="relative">
        <Box mt={sectionPadding * -2 - gridSpacing / 2}>
          <Grid container spacing={gridSpacing}>
            {allMarkdownRemark.edges.map(({node}) => {
              const {video, title, summary} = node.frontmatter;
              return (
                <Grid item xs={12} sm={6} md={4} xl={3} key={node.id}>
                  <Box component={CardActionArea} to={node.fields.path} mb={2}>
                    <Box
                      component="video"
                      src={video.publicURL}
                      display="block"
                      width={1}
                      autoPlay
                      muted
                      loop
                    />
                  </Box>
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
      <Box p={sectionPadding} bgcolor="background.paper">
        <Box mb={4}>
          <Typography display="block" variant="overline">
            Some open source projects
          </Typography>
          <Typography variant="h2">that I&apos;m proud of</Typography>
        </Box>
        <Grid container spacing={3}>
          {github.repositoryOwner.pinnedRepositories.edges.map(({node}) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={node.id}>
              <Box p={2} height={1} border={1} borderColor="divider">
                <Typography gutterBottom variant="h6">
                  <Link color="inherit" href={node.url}>
                    {node.name}
                  </Link>
                </Typography>
                <Typography paragraph>{node.description}</Typography>
                <Box display="flex" alignItems="center">
                  <GoStar style={{marginRight: 4}} />
                  <Typography>{node.stargazers.edges.length}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___order, order: DESC}) {
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
