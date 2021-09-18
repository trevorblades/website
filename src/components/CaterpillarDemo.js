import PropTypes from 'prop-types';
import React, {useState} from 'react';
import identity from 'lodash/identity';
import {
  Box,
  Flex,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  chakra
} from '@chakra-ui/react';

function Segment({children, width, rotation, color, value}) {
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

function SegmentSlider({label, value, formatValue = identity, ...props}) {
  return (
    <Box w={200}>
      <chakra.label fontFamily="mono" fontSize="sm">
        {label}: {formatValue(value)}
        <div>
          <Slider value={value} {...props}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
      </chakra.label>
    </Box>
  );
}

SegmentSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  formatValue: PropTypes.func
};

export default function CaterpillarDemo() {
  const [width, setWidth] = useState(100);
  const [rotation, setRotation] = useState(0);
  return (
    <Box borderWidth="1px" rounded="md">
      <HStack spacing="4" px="4" py="2" borderBottomWidth="1px">
        <SegmentSlider
          label="Width"
          min={50}
          max={300}
          value={width}
          onChange={setWidth}
          formatValue={value => value + 'px'}
        />
        <SegmentSlider
          label="Rotation"
          min={0}
          max={120}
          value={rotation}
          onChange={setRotation}
          formatValue={value => value + '°'}
        />
      </HStack>
      <Box p="4">
        <div
          style={{
            height:
              width +
              // get the height of the second segment when it's turned 45deg
              // it is essential the hypoteneuse of a right triangle where both
              // of the other sides are equal
              Math.sqrt(width ** 2 / 2)
          }}
        >
          <Segment value="test" color="red.500" width={width} rotation={0}>
            <Segment
              value="test"
              color="blue.500"
              width={width}
              rotation={rotation}
            >
              <Segment
                value="test"
                color="green.500"
                width={width}
                rotation={rotation}
              />
            </Segment>
          </Segment>
        </div>
      </Box>
    </Box>
  );
}
