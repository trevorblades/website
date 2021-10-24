import PropTypes from 'prop-types';
import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import {Link, useColorModeValue} from '@chakra-ui/react';

export default function PageLink({href, ...props}) {
  const textColor = useColorModeValue('blue.600', 'blue.400');
  const linkProps = href.startsWith('/')
    ? {as: GatsbyLink, to: href}
    : {href, isExternal: !href.startsWith('#')};
  return <Link color={textColor} {...linkProps} {...props} />;
}

PageLink.propTypes = {
  href: PropTypes.string.isRequired
};
