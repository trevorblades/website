import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Twemoji from 'react-twemoji';
import Typography from '@material-ui/core/Typography';
import {Link} from '@reach/router';
import {centered} from '.';

const Header = () => (
  <AppBar elevation={0} color="inherit" position="sticky">
    <Toolbar>
      <Typography component={Link} to="/" variant="h5" className={centered}>
        <Twemoji>{FAVICON}</Twemoji>
      </Typography>
    </Toolbar>
    <Divider />
  </AppBar>
);

export default Header;
