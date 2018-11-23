import React from 'react';
import Twemoji from 'react-twemoji';
import Typography from '@material-ui/core/Typography';
import {ConstrainedSection, Spacer} from '.';
import {css} from 'react-emotion';

const textAlignCenter = css({
  textAlign: 'center'
});

const now = new Date();
const Footer = () => (
  <ConstrainedSection className={textAlignCenter}>
    <Typography gutterBottom variant="h3">
      Call me maybe
    </Typography>
    <Typography variant="subtitle1">
      Want to get in touch? Send me an email at{' '}
      <a href="mailto:tdblades@gmail.com">tdblades@gmail.com</a>.
    </Typography>
    <Spacer />
    <Typography variant="h4">
      <Twemoji>{FAVICON}</Twemoji>
    </Typography>
    <Typography variant="overline" color="textSecondary">
      &copy; {now.getFullYear()} Trevor Blades
    </Typography>
  </ConstrainedSection>
);

export default Footer;
