import React from 'react';
import {Box, Link, Typography} from '@material-ui/core';

export default function Footer() {
  return (
    <Box textAlign="center" p={8}>
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
  );
}
