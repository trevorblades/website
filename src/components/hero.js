import React from 'react';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import {
  Box,
  MuiThemeProvider,
  Typography,
  createMuiTheme,
  useTheme
} from '@material-ui/core';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {IconButton} from 'gatsby-theme-material-ui';
import {themeOptions} from '@trevorblades/mui-theme';

const darkTheme = createMuiTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette,
    type: 'dark'
  }
});

export default function Hero(props) {
  const {y} = useWindowScroll();
  const {spacing} = useTheme();
  return (
    <MuiThemeProvider theme={darkTheme}>
      <Box
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
        {...props}
      >
        <div>
          <Typography display="block" variant="overline">
            I&apos;m Trevor, and I like to
          </Typography>
          <Typography paragraph variant="h1">
            design + build stuff
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
    </MuiThemeProvider>
  );
}
