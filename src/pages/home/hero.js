import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled, {css} from 'react-emotion';
import theme, {getLinearGradient} from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Section, sectionPadding} from '../../components';
import {size} from 'polished';

const StyledSection = styled(Section)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${sectionPadding}px)`,
  color: theme.palette.common.white,
  backgroundImage: getLinearGradient()
});

const SocialLinks = styled.div({
  display: 'flex'
});

const SocialLink = withProps({
  target: '_blank',
  rel: 'noopener noreferrer'
})(
  styled.a({
    ':not(:last-child)': {
      marginRight: theme.spacing.unit * 3
    },
    svg: css(size(36), {
      display: 'block'
    })
  })
);

const Hero = () => (
  <StyledSection>
    <div>
      <Typography gutterBottom variant="subtitle1" color="inherit">
        I&apos;m Trevor
      </Typography>
      <Typography gutterBottom variant="h2" color="inherit">
        I like to make <Link to="/projects">cool stuff</Link> 🍦
      </Typography>
      <SocialLinks>
        <SocialLink
          href="https://github.com/trevorblades"
          title="I <3 open source"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://twitter.com/trevorblades" title="Don't @ me">
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="https://instagram.com/trevorblades"
          title="Mostly skateboarding videos"
        >
          <FaInstagram />
        </SocialLink>
        <SocialLink
          href="https://twitch.com/trevorblades"
          title="I stream sometimes"
        >
          <FaTwitch />
        </SocialLink>
      </SocialLinks>
    </div>
  </StyledSection>
);

export default Hero;
