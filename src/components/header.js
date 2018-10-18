import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withProps from 'recompose/withProps';
import {Link} from 'react-router-dom';
import {css} from 'react-emotion';

const centered = css({
  margin: '0 auto'
});

const LinkButtonBase = withProps({
  component: Link
})(ButtonBase);

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
