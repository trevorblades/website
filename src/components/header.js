import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {centered, withLink} from '.';

const LinkButtonBase = withLink(ButtonBase);
const Header = () => (
  <AppBar elevation={0} color="inherit" position="sticky">
    <Toolbar>
      <Typography
        component={LinkButtonBase}
        to="/"
        variant="h5"
        className={centered}
      >
        {FAVICON}
      </Typography>
    </Toolbar>
    <Divider />
  </AppBar>
);

export default Header;
