import PropTypes from 'prop-types';
import React from 'react';
import {AspectRatio, Box, Heading, Text} from '@chakra-ui/react';
import {getLuminance, tint} from 'polished';

export default function GridItem({icon, title, description, color, href}) {
  const logoColor = getLuminance(color) > 0.5 ? 'black' : 'white';
  return (
    <Box
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      textAlign="center"
      color={logoColor}
      pos="relative"
      role="group"
      bgColor={color}
      _hover={{bgColor: tint(0.1, color)}}
      sx={{
        '*': {
          transitionProperty: 'opacity, transform',
          transitionDuration: '250ms'
        }
      }}
    >
      <Box
        as={icon}
        height="calc(100% / 3)"
        fill="current"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        _groupHover={{opacity: 0.25}}
      />
      <AspectRatio ratio={1}>
        <div>
          <Box
            px={[4, 5, 6]}
            py={[6, 7, 8]}
            opacity="0"
            transform="translateY(5%)"
            _groupHover={{
              opacity: 1,
              transform: 'none'
            }}
          >
            <Heading letterSpacing="tight">{title}</Heading>
            <Text
              transform="translateY(20%)"
              _groupHover={{transform: 'none'}}
              fontSize={{base: 'lg', md: 'xl'}}
            >
              {description}
            </Text>
          </Box>
        </div>
      </AspectRatio>
    </Box>
  );
}

GridItem.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};
