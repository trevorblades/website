import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import twemoji from 'twemoji';
import {Link} from '@reach/router';
import {centered} from '.';

const Header = () => (
  <AppBar elevation={0} color="inherit" position="sticky">
    <Toolbar>
      <Typography
        component={Link}
        to="/"
        variant="h5"
        className={centered}
        dangerouslySetInnerHTML={{__html: twemoji.parse(FAVICON)}}
      />
    </Toolbar>
    <Divider />
  </AppBar>
);

export default Header;
