import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';
import theme, {getLinearGradient} from '@trevorblades/mui-theme';
import twemoji from 'twemoji';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';
import {Link} from '@reach/router';
import {Section, sectionPadding} from '../../components';

const StyledSection = styled(Section)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${sectionPadding}px)`,
  color: theme.palette.common.white,
  backgroundImage: getLinearGradient()
});

const SocialLinks = styled.div({
  display: 'flex',
  fontSize: 36
});

const SocialLink = styled.a({
  ':not(:last-child)': {
    marginRight: theme.spacing.unit * 3
  },
  svg: {
    display: 'block'
  }
});

const socialLinks = [
  {
    href: 'https://github.com/trevorblades',
    title: 'I <3 open source',
    icon: <FaGithub />
  },
  {
    href: 'https://twitter.com/trevorblades',
    title: "Don't @me",
    icon: <FaTwitter />
  },
  {
    href: 'https://instagram.com/trevorblades',
    title: 'Mostly skateboarding videos',
    icon: <FaInstagram />
  },
  {
    href: 'https://twitch.com/trevorblades',
    title: 'I stream sometimes',
    icon: <FaTwitch />
  }
];

const Hero = () => (
  <StyledSection>
    <div>
      <Typography gutterBottom variant="subtitle1" color="inherit">
        I&apos;m Trevor
      </Typography>
      <Typography gutterBottom variant="h2" color="inherit">
        I like to make <Link to="/projects">cool stuff</Link>{' '}
        <span dangerouslySetInnerHTML={{__html: twemoji.parse('🍦')}} />
      </Typography>
      <SocialLinks>
        {socialLinks.map(link => (
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            key={link.href}
            href={link.href}
            title={link.title}
          >
            {link.icon}
          </SocialLink>
        ))}
      </SocialLinks>
    </div>
  </StyledSection>
);

export default Hero;
