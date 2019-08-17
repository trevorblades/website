import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Box, styled} from '@material-ui/core';
import {GoStar} from 'react-icons/go';
import {Link, graphql} from 'gatsby';
// import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0
});

export default function Home(props) {
  return (
    <Layout disableHeader>
      {/* <Hero>
        <HeroContent>
          <div>
            <Typography gutterBottom variant="subtitle1" color="inherit">
              I&apos;m Trevor
            </Typography>
            <Typography gutterBottom variant="h2" color="inherit">
              <Twemoji>
                I like to make <Link to="/projects">cool stuff</Link> 🍦
              </Twemoji>
            </Typography>
            <SocialLinks>
              {socialLinks.map(link => (
                <SocialLink
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.href}
                  href={link.href}
                  title={link.title}
                >
                  {link.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </div>
        </HeroContent>
      </Hero> */}
      <div>
        {props.data.allMdx.edges.map(({node}, index) => {
          const [image] = node.frontmatter.images;
          switch (index) {
            case 0:
              return (
                <Box width={1 / 2} key={node.id} position="relative">
                  <Box pb="100%" position="relative">
                    <StyledImage src={image.src.publicURL} />
                  </Box>
                  <Box position="absolute" top="100%">
                    <Typography gutterBottom variant="h4">
                      {node.frontmatter.title}
                    </Typography>
                  </Box>
                </Box>
              );
            case 1:
              return (
                <Box
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                >
                  <Typography gutterBottom variant="h4">
                    {node.frontmatter.title}
                  </Typography>
                  <Box width={1 / 2}>
                    <Box mt="-50%" pb="150%" position="relative">
                      <StyledImage src={image.src.publicURL} />
                    </Box>
                  </Box>
                </Box>
              );
            default:
              return (
                <Box key={node.id}>
                  <Box pb="50%" position="relative">
                    <StyledImage src={image.src.publicURL} />
                  </Box>
                  <Typography gutterBottom variant="h4">
                    {node.frontmatter.title}
                  </Typography>
                </Box>
              );
          }
        })}
        <div>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            Not impressed? Want to see more?
          </Typography>
          <Button
            component={Link}
            color="primary"
            to="/projects"
            size="large"
            variant="contained"
          >
            All projects
          </Button>
        </div>
      </div>
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
            images {
              src {
                publicURL
              }
              title
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
