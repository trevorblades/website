import PropTypes from 'prop-types';
import React from 'react';
import {Flex, chakra} from '@chakra-ui/react';

export default function Segment({children, width, rotation, color, value}) {
  return (
    <Flex transformOrigin="left" style={{transform: `rotate(${rotation}deg)`}}>
      <chakra.span
        flexShrink="0"
        textAlign="center"
        bgColor={color}
        style={{width}}
      >
        {value}
      </chakra.span>
      {children}
    </Flex>
  );
}

Segment.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
