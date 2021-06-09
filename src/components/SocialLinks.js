import React from 'react';
import {ButtonGroup, IconButton, Link} from '@chakra-ui/react';
import {FaGithub, FaTwitch, FaTwitter} from 'react-icons/fa';

function SocialLink(props) {
  return <IconButton fontSize="2xl" as={Link} isExternal {...props} />;
}

export default function SocialLinks() {
  return (
    <ButtonGroup variant="ghost">
      <SocialLink
        icon={<FaTwitter />}
        colorScheme="twitter"
        href="https://twitter.com/trevorblades"
      />
      <SocialLink
        icon={<FaTwitch />}
        colorScheme="purple"
        href="https://twitch.tv/trevorblades"
      />
      <SocialLink icon={<FaGithub />} href="https://github.com/trevorblades" />
    </ButtonGroup>
  );
}
