import React from 'react';
import {ButtonGroup, IconButton, Link} from '@chakra-ui/react';
import {FaGithub, FaInstagram, FaTwitch, FaTwitter} from 'react-icons/fa';

function SocialButton(props) {
  return <IconButton as={Link} isExternal fontSize="3xl" {...props} />;
}

export default function SocialButtons() {
  return (
    <ButtonGroup size="lg" variant="ghost">
      <SocialButton
        href="https://twitter.com/trevorblades"
        icon={<FaTwitter />}
      />
      <SocialButton
        href="https://github.com/trevorblades"
        icon={<FaGithub />}
      />
      <SocialButton
        href="https://twitch.com/trevorblades"
        icon={<FaTwitch />}
      />
      <SocialButton
        href="https://instagram.com/trevorblades"
        icon={<FaInstagram />}
      />
    </ButtonGroup>
  );
}
