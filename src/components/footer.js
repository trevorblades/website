import Divider from '@material-ui/core/Divider';
import React, {Fragment} from 'react';
import Twemoji from 'react-twemoji';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import {ConstrainedSection, Spacer} from './common';

const Container = styled(ConstrainedSection)({
  textAlign: 'center'
});

export default function Footer() {
  const now = new Date();
  return (
    <Fragment>
      <Divider />
      <Container>
        <Typography gutterBottom variant="h3">
          Call me maybe
        </Typography>
        <Typography variant="subtitle1">
          Want to get in touch? Send me an email at{' '}
          <a href="mailto:tdblades@gmail.com">tdblades@gmail.com</a>.
        </Typography>
        <Spacer />
        <Typography variant="h4">
          <Twemoji>🔪</Twemoji>
        </Typography>
        <Typography variant="overline" color="textSecondary">
          &copy; {now.getFullYear()} Trevor Blades
        </Typography>
      </Container>
    </Fragment>
  );
}
