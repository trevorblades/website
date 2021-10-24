import PropTypes from 'prop-types';
import React from 'react';
import {Box, Heading, chakra, useColorModeValue} from '@chakra-ui/react';

export default function Blockquote({children}) {
  const bgColor = useColorModeValue('green.100', 'yellow.600');
  return (
    <chakra.blockquote p="4" rounded="lg" bgColor={bgColor}>
      <Heading size="sm" mb="2">
        💡 Did you know?
      </Heading>
      <Box fontStyle="italic">{children}</Box>
    </chakra.blockquote>
  );
}

Blockquote.propTypes = {
  children: PropTypes.node.isRequired
};
