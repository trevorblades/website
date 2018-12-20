import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Twemoji from 'react-twemoji';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const Logo = styled(Typography)({
  margin: '0 auto'
});

export default function Header() {
  return (
    <AppBar elevation={0} color="inherit" position="sticky">
      <Toolbar>
        <Logo component={Link} to="/" variant="h5">
          <Twemoji>🔪</Twemoji>
        </Logo>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
