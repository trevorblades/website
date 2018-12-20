import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Twemoji from 'react-twemoji';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import theme, {getLinearGradient} from '@trevorblades/mui-theme';
import toRenderProps from 'recompose/toRenderProps';
import withProps from 'recompose/withProps';
import withWidth from '@material-ui/core/withWidth';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {GoStar} from 'react-icons/go';
import {GridItem, Section, Spacer, sectionPadding} from '../components/common';
import {Link, graphql} from 'gatsby';
import {css} from '@emotion/core';

const Hero = styled.main({
  color: theme.palette.common.white,
  backgroundImage: getLinearGradient()
});

const HeroContent = styled(Section)({
  display: 'flex',
  alignItems: 'center',
  height: `calc(100vh - ${sectionPadding}px)`
});

const SocialLinks = styled.div({
  display: 'flex',
  fontSize: 36
});

const SocialLink = styled.a({
  ':not(:last-child)': {
    marginRight: theme.spacing.unit * 3
  },
  svg: {
    display: 'block'
  }
});

const gridSpacing = 40;
const Screenshot = styled.img(props => ({
  display: 'block',
  width: '100%',
  marginTop: props.index ? 0 : sectionPadding * -2,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  [theme.breakpoints.down('xs')]: {
    width: '100vw',
    [`margin${props.right ? 'Right' : 'Left'}`]: -sectionPadding,
    marginBottom: gridSpacing,
    borderRadius: 0,
    boxShadow: 'none'
  }
}));

const ProjectsFooter = styled.div({
  textAlign: 'center'
});

const WithWidth = toRenderProps(withWidth());
const LinkButton = withProps({
  component: Link
})(Button);

const Respository = styled.div({
  ':not(:last-child)': {
    marginBottom: theme.spacing.unit * 1.5
  }
});

const flexAlignCenter = css({
  display: 'flex',
  alignItems: 'center'
});

const Heading = styled.div(flexAlignCenter);
const Stars = styled.div(flexAlignCenter, {
  marginLeft: theme.spacing.unit,
  svg: {
    marginRight: theme.spacing.unit / 2
  }
});

const socialLinks = [
  {
    href: 'https://github.com/trevorblades',
    title: 'I <3 open source',
    icon: <FaGithub />
  },
  {
    href: 'https://twitter.com/trevorblades',
    title: "Don't @me",
    icon: <FaTwitter />
  },
  {
    href: 'https://instagram.com/trevorblades',
    title: 'Mostly skateboarding videos',
    icon: <FaInstagram />
  },
  {
    href: 'https://twitch.com/trevorblades',
    title: 'I stream sometimes',
    icon: <FaTwitch />
  }
];

export default function Home(props) {
  return (
    <Layout disableHeader>
      <Hero>
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
      </Hero>
      <Section>
        <WithWidth>
          {({width}) =>
            props.data.allMarkdownRemark.edges.map(({node}, index) => {
              const right = index % 2;
              const image = node.frontmatter.images[0];
              const {path} = node.fields;
              return (
                <Fragment key={path}>
                  <Grid
                    container
                    spacing={width === 'xs' ? 0 : gridSpacing}
                    direction={right ? 'row-reverse' : null}
                    alignItems={!index ? 'flex-start' : 'flex-end'}
                  >
                    <GridItem sm={12} md={8}>
                      <Screenshot
                        alt={image.title}
                        src={image.src.publicURL}
                        right={right}
                        index={index}
                      />
                    </GridItem>
                    <GridItem sm={12} md={4}>
                      <Typography gutterBottom variant="h4">
                        {node.frontmatter.title}
                      </Typography>
                      <Typography paragraph>
                        {node.frontmatter.summary}
                      </Typography>
                      <LinkButton to={path} variant="outlined">
                        View project
                      </LinkButton>
                    </GridItem>
                  </Grid>
                  <Spacer />
                </Fragment>
              );
            })
          }
        </WithWidth>
        <ProjectsFooter>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            Not satisfied? Want to see more?
          </Typography>
          <LinkButton
            color="primary"
            to="/projects"
            size="large"
            variant="contained"
          >
            All projects
          </LinkButton>
        </ProjectsFooter>
      </Section>
      <Divider />
      <Section>
        <Typography variant="h3" gutterBottom>
          Open source
        </Typography>
        <Typography paragraph variant="subtitle1">
          A handful of my open source projects
        </Typography>
        {props.data.github.repositoryOwner.pinnedRepositories.edges.map(
          ({node}) => (
            <Respository key={node.id}>
              <Heading>
                <Typography variant="h6" component="a" href={node.url}>
                  {node.name}
                </Typography>
                <Stars>
                  <GoStar />
                  <Typography>{node.stargazers.edges.length}</Typography>
                </Stars>
              </Heading>
              <Typography>
                <Twemoji noWrapper>
                  <span>{node.description}</span>
                </Twemoji>
              </Typography>
            </Respository>
          )
        )}
      </Section>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}) {
      edges {
        node {
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
