import Accolades from '../components/accolades';
import Hero from '../components/hero';
import OpenSource from '../components/open-source';
import Projects from '../components/projects';
import React, {Fragment} from 'react';
import {Box, Link, Typography} from '@material-ui/core';
import {Helmet} from 'react-helmet';
import {ReactComponent as Logo} from 'twemoji/2/svg/1f52a.svg';

const SECTION_PADDING = {
  xs: 5,
  sm: 6,
  md: 7,
  lg: 8
};

export default function Home() {
  return (
    <Fragment>
      <Helmet defaultTitle="Trevor Blades" titleTemplate="%s - Trevor Blades" />
      <Hero p={SECTION_PADDING} />
      <Box p={SECTION_PADDING} bgcolor="background.default" position="relative">
        <Projects />
        <OpenSource my={SECTION_PADDING} />
        <Accolades />
      </Box>
      <Box p={SECTION_PADDING} color="black" bgcolor="#9146ff">
        <Typography variant="overline" display="block">
          F#*! it, we&apos;ll
        </Typography>
        <Typography gutterBottom variant="h2">
          do it live
        </Typography>
        <Typography gutterBottom variant="h6">
          Live coding Wednesdays at 7pm PT on Twitch
        </Typography>
      </Box>
      <Box p={SECTION_PADDING} textAlign="center">
        <Box mb={SECTION_PADDING}>
          <Typography gutterBottom variant="h3">
            Call me maybe?
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
