import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import knoword from '../assets/images/knoword.gif';
import pollenize from '../assets/images/pollenize.gif';
import stories from '../assets/images/stories.gif';
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
const GridContainer = withProps({
  container: true,
  spacing: 32
})(Grid);

const GridItem = withProps({
  item: true
})(Grid);

const Spacer = styled.div({
  height: sectionPadding * 1.5
});

const Screenshot = styled.img({
  display: 'block',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10]
});

const OffsetScreenshot = styled(Screenshot)({
  marginTop: sectionPadding * -2
});

const LinkButton = withProps({
  component: Link
})(Button);

const OutlinedLinkButton = withProps({
  variant: 'outlined'
})(LinkButton);

const ProjectsFooter = styled.div({
  textAlign: 'center'
});

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
      <GridContainer>
        <GridItem sm={12} md={8}>
          <OffsetScreenshot src={pollenize} />
        </GridItem>
        <GridItem sm={12} md={4}>
          <Typography gutterBottom variant="h4">
            Pollenize
          </Typography>
          <Typography paragraph>
            My friends and I created a non-profit organization that helps voters
            make informed decisions.
          </Typography>
          <LinkButton to="/projects/pollenize" variant="outlined">
            Learn more
          </LinkButton>
        </GridItem>
      </GridContainer>
      <Spacer />
      <GridContainer direction="row-reverse">
        <GridItem sm={12} md={8}>
          <Screenshot src={knoword} />
        </GridItem>
        <GridItem sm={12} md={4}>
          <Typography gutterBottom variant="h4">
            Knoword
          </Typography>
          <Typography paragraph>
            Test your vocabulary skills and have fun doing it! Knoword is an
            educational, addicting word game and a great tool for teachers.
          </Typography>
          <LinkButton to="/projects/knoword" variant="outlined">
            View project
          </LinkButton>
        </GridItem>
      </GridContainer>
      <Spacer />
      <GridContainer>
        <GridItem sm={12} md={8}>
          <Screenshot src={stories} />
        </GridItem>
        <GridItem sm={12} md={4}>
          <Typography gutterBottom variant="h4">
            Planet Stories
          </Typography>
          <Typography paragraph>
            Create awesome timelapse movies from daily satellite imagery. I
            built this shit with my awesome team at Planet.
          </Typography>
          <OutlinedLinkButton to="/projects/knoword">
            View project
          </OutlinedLinkButton>
        </GridItem>
      </GridContainer>
      <Spacer />
      <ProjectsFooter>
        <Typography gutterBottom variant="subtitle1" color="textSecondary">
          Not satisfied? Want to see more?
        </Typography>
        <LinkButton
          color="primary"
          to="/projects"
          size="large"
          variant="contained"
        >
          All projects
        </LinkButton>
      </ProjectsFooter>
    </ConstrainedSection>
    <Divider />
    <ConstrainedSection>
      <Typography gutterBottom variant="h3">
        Open source
      </Typography>
      <Typography variant="subtitle1">countries</Typography>
    </ConstrainedSection>
  </Fragment>
);

export default Home;
