import LabelledSlider from './LabelledSlider';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, HStack} from '@chakra-ui/react';

export default function Demo({sliders, children}) {
  return (
    <Box borderWidth="1px" rounded="lg">
      <HStack spacing="6" px="4" py="2" borderBottomWidth="1px">
        {sliders.map((slider, index) => (
          <LabelledSlider key={index} {...slider} />
        ))}
      </HStack>
      <Box p="4" overflow="hidden">
        {children}
      </Box>
    </Box>
  );
}

Demo.propTypes = {
  sliders: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
};
