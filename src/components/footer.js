import Logo from './logo';
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
      <Box mb={2} component={Logo} width={64} height={64} />
      <Typography variant="subtitle2">
        &copy; {new Date().getFullYear()} Trevor Blades
      </Typography>
    </Box>
  );
}
