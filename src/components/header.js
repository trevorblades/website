import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {css} from 'react-emotion';

const centered = css({
  margin: '0 auto'
});

const Header = () => (
  <AppBar elevation={0} color="inherit" position="sticky">
    <Toolbar>
      <Typography variant="h5" className={centered}>
        {FAVICON}
      </Typography>
    </Toolbar>
    <Divider />
  </AppBar>
);

export default Header;
