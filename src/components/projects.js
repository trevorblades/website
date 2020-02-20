import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import apollo from '../assets/apollo2.png';
import knoword from '../assets/knoword2.png';
import playback from '../assets/playback.png';
import pollenize from '../assets/pollenize.png';
import stories from '../assets/stories.png';
import superteam from '../assets/superteam.png';
import {Box, Link, Typography} from '@material-ui/core';

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
        borderRadius="calc(100% / 3)"
        bgcolor="red"
        flexShrink={0}
        boxShadow={{
          xs: 7,
          sm: 8,
          md: 9,
          lg: 10
        }}
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
          <Link
            color="inherit"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default function Projects() {
  return (
    <Fragment>
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
      <Project image={superteam} title="Superteam" url="https://superteam.trevorblades.com">
        Just-for-fun fantasy CS:GO esports contest
      </Project>
    </Fragment>
  );
}
