import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
const Section = styled.section({
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

const ConstrainedSection = styled(Section)({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto'
});

const GridItem = withProps({item: true})(Grid);

const StyledImage = styled.img({
  width: '100%',
  marginTop: sectionPadding * -2,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10]
});

const MoreButton = withProps({
  component: Link,
  variant: 'outlined',
  size: 'small'
})(Button);

const Home = () => (
  <Fragment>
    <Hero>
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
    <ConstrainedSection>
      <Grid container spacing={theme.spacing.unit * 4}>
        <GridItem sm={12} md={8}>
          <StyledImage src={pollenize} />
        </GridItem>
        <GridItem sm={12} md={4}>
          <Typography gutterBottom variant="h4">
            Pollenize
          </Typography>
          <Typography gutterBottom>
            My friends and I created a non-profit organization that helps voters
            make informed decisions.
          </Typography>
          <MoreButton to="/projects/pollenize">Learn more</MoreButton>
        </GridItem>
        <GridItem sm={12} md={4}>
          <Typography gutterBottom variant="h4">
            Knoword
          </Typography>
          <Typography gutterBottom>
            Test your vocabulary skills and have fun doing it! Knoword is an
            educational, addicting word game.
          </Typography>
          <MoreButton to="/projects/knoword">View project</MoreButton>
        </GridItem>
      </Grid>
    </ConstrainedSection>
  </Fragment>
);

export default Home;
