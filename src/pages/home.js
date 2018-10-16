import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import pollenize from '../assets/images/pollenize.gif';
import styled, {css} from 'react-emotion';
import theme, {getLinearGradient} from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {size} from 'polished';

const sectionPadding = theme.spacing.unit * 7;
const Section = styled.div({
  padding: sectionPadding
});

const Hero = styled(Section)({
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

const StyledImage = styled.img({
  marginTop: sectionPadding * -2,
  marginBottom: theme.spacing.unit * 1.5,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10]
});

const Home = () => (
  <Fragment>
    <Hero>
      <div>
        <Typography gutterBottom variant="subtitle1" color="inherit">
          I&apos;m Trevor
        </Typography>
        <Typography gutterBottom variant="h2" color="inherit">
          I like to make <Link to="/projects">cool stuff</Link>!
        </Typography>
        <SocialLinks>
          <SocialLink
            href="https://github.com/trevorblades"
            title="I <3 open source"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/trevorblades"
            title="Don't @ me"
          >
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
    </Hero>
    <Section>
      <StyledImage src={pollenize} />
      <Typography>
        Pollenize is a tool that helps voters make informed decisions
      </Typography>
    </Section>
  </Fragment>
);

export default Home;
