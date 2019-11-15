import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import apollo from '../assets/apollo2.png';
import knoword from '../assets/knoword2.png';
import playback from '../assets/playback.png';
import pollenize from '../assets/pollenize.png';
import stories from '../assets/stories.png';
import superteam from '../assets/superteam.png';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import {
  Box,
  CardActionArea,
  Divider,
  Grid,
  Link,
  MuiThemeProvider,
  Typography,
  createMuiTheme,
  useTheme
} from '@material-ui/core';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {GoStar} from 'react-icons/go';
import {Helmet} from 'react-helmet';
import {IconButton} from 'gatsby-theme-material-ui';
import {ReactComponent as Logo} from 'twemoji/2/svg/1f52a.svg';
import {graphql} from 'gatsby';
import {themeOptions} from '@trevorblades/mui-theme';

const darkTheme = createMuiTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette,
    type: 'dark'
  }
});

const PROJECT_ICON_SIZE = {
  xs: 48,
  sm: 56,
  md: 64,
  lg: 72
};

function Project(props) {
  const hasTags = props.tags.length > 0;
  return (
    <Box
      width={{
        xs: 1,
        md: 2 / 3
      }}
      my={{
        xs: 3,
        sm: 4,
        md: 5,
        lg: 6
      }}
      display="flex"
      alignItems="flex-start"
    >
      <Box
        width={PROJECT_ICON_SIZE}
        height={PROJECT_ICON_SIZE}
        borderRadius="25%"
        bgcolor="red"
        flexShrink={0}
        boxShadow={10}
        component="img"
        src={props.image}
      />
      <Box
        ml={{
          xs: 2,
          sm: 3
        }}
        mt={{
          xs: 0,
          sm: 1 / 2,
          md: 1
        }}
      >
        <Typography gutterBottom variant="h4">
          <Link color="inherit" href={props.url}>
            {props.title}
          </Link>
        </Typography>
        <Typography gutterBottom={hasTags} variant="h6">
          {props.children}
        </Typography>
        {hasTags && (
          <Typography color="textSecondary" variant="subtitle2">
            Tags: {props.tags.join(', ')}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.array,
  children: PropTypes.node.isRequired
};

Project.defaultProps = {
  tags: []
};

const SECTION_PADDING = {
  xs: 5,
  sm: 6,
  md: 7,
  lg: 8
};

export default function Home(props) {
  const {y} = useWindowScroll();
  const {spacing} = useTheme();
  return (
    <Fragment>
      <Helmet defaultTitle="Trevor Blades" titleTemplate="%s - Trevor Blades" />
      <MuiThemeProvider theme={darkTheme}>
        <Box
          p={SECTION_PADDING}
          height={`calc(100vh - ${spacing(16)}px)`}
          display="flex"
          alignItems="center"
          color="text.primary"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
            backgroundImage: `linear-gradient(${[
              'to bottom right',
              'slategrey',
              'black'
            ]})`,
            transform: `translateY(${y / 3}px)`
          }}
        >
          <div>
            <Typography display="block" variant="overline">
              I&apos;m Trevor, and I like to
            </Typography>
            <Typography paragraph variant="h1">
              design + build stuff
            </Typography>
            <Box ml={-1.5}>
              <IconButton
                color="inherit"
                href="https://github.com/trevorblades"
              >
                <FaGithub size={40} />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com/trevorblades"
              >
                <FaTwitter size={40} />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitch.com/trevorblades"
              >
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
      </MuiThemeProvider>
      <Box p={SECTION_PADDING} bgcolor="background.default" position="relative">
        <Typography display="block" variant="overline">
          These are a few of
        </Typography>
        <Typography gutterBottom variant="h2">
          my favorite things
        </Typography>
        <Project
          image={knoword}
          title="Knoword"
          url="https://playknoword.com"
          tags={['design', 'development', 'game', 'edtech']}
        >
          Fun, educational online word game enjoyed by logophiles, students, and
          teachers alike
        </Project>
        <Project
          image={pollenize}
          title="Pollenize"
          url="https://pollenize.org"
          tags={['design', 'gatsby', 'graphql', 'politics', 'education']}
        >
          Interactive, unbiased election guides with diverse sources, compare
          tools, and colorful illustrations
        </Project>
        <Project
          image={apollo}
          title="Apollo Docs"
          url="https://www.apollographql.com/docs"
        >
          Engaging and educational documentation for the best GraphQL toolset on
          the internet
        </Project>
        <Project image={playback} title="Playback" url="https://playback.rocks">
          A tool that helps music video directors organize complicated shoots
        </Project>
        <Project
          image={stories}
          title="Planet Stories"
          url="https://planet.com/stories"
        >
          Timelapse movies made from daily satellite imagery
        </Project>
        <Project image={superteam} title="Superteam" url="https://superteam.gg">
          Just-for-fun fantasy CS:GO esports contest
        </Project>
        <Box
          p={{
            xs: 0,
            sm: 5
          }}
          my={SECTION_PADDING}
          bgcolor={{
            xs: 'none',
            sm: 'background.paper'
          }}
          border={{
            xs: 0,
            sm: 2
          }}
          borderColor={{
            sm: 'primary.main'
          }}
        >
          <Box mb={4}>
            <Typography display="block" variant="overline">
              Sharing is caring
            </Typography>
            <Typography variant="h2">open source projects</Typography>
          </Box>
          <Grid container spacing={3}>
            {props.data.github.repositoryOwner.pinnedRepositories.edges.map(
              ({node}) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={node.id}>
                  <CardActionArea
                    component="a"
                    href={node.url}
                    style={{height: '100%'}}
                  >
                    <Box
                      p={3}
                      height="inherit"
                      border={1}
                      borderColor="divider"
                    >
                      <Typography gutterBottom variant="h6">
                        {node.name}
                      </Typography>
                      <Typography paragraph>{node.description}</Typography>
                      <Box display="flex" alignItems="center">
                        <GoStar style={{marginRight: 4}} />
                        <Typography>{node.stargazers.edges.length}</Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Grid>
              )
            )}
          </Grid>
        </Box>
        <Typography gutterBottom variant="h2">
          Accolades 👏👏👏
        </Typography>
        <Typography gutterBottom variant="h6">
          🏆 W3 Awards Best in Show (2013)
        </Typography>
        <Typography gutterBottom variant="h6">
          🏆 Lotus Awards Best Website or Microsite (2012)
        </Typography>
        <Typography gutterBottom variant="h6">
          🏆 Awwwards Site of the Day (2012)
        </Typography>
        <Typography gutterBottom variant="h6">
          🏅 Webby Awards Honoree (2016, 2013)
        </Typography>
      </Box>
      <Divider />
      <Box p={SECTION_PADDING} textAlign="center">
        <Box mb={SECTION_PADDING}>
          <Typography gutterBottom variant="h3">
            Call me maybe
          </Typography>
          <Typography>
            Want to get in touch? Send me an email at{' '}
            <Link href="mailto:tdblades@gmail.com">tdblades@gmail.com</Link>.
          </Typography>
        </Box>
        <Box mb={2} component={Logo} width={64} height={64} />
        <Typography variant="subtitle2">
          &copy; {new Date().getFullYear()} Trevor Blades
        </Typography>
      </Box>
    </Fragment>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  {
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
