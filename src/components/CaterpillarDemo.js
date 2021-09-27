import PropTypes from 'prop-types';
import React, {useMemo, useState} from 'react';
import Spiral, {
  calcInOutset,
  getNumInOutsets,
  measureShape
} from 'react-spiral';
import identity from 'lodash/identity';
import {
  Box,
  Flex,
  HStack,
  Input,
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

function LabelledSlider({label, value, formatValue = identity, ...props}) {
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

LabelledSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  formatValue: PropTypes.func
};

function Demo({sliders, children}) {
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

export function CaterpillarDemo() {
  const [width, setWidth] = useState(100);
  const [rotation, setRotation] = useState(0);
  return (
    <Demo
      sliders={[
        {
          label: 'Width',
          min: 50,
          max: 300,
          value: width,
          onChange: setWidth,
          formatValue: value => value + 'px'
        },
        {
          label: 'Rotation',
          min: 0,
          max: 120,
          value: rotation,
          onChange: setRotation,
          formatValue: value => value + '°'
        }
      ]}
    >
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
        <Segment value="first" color="red.500" width={width} rotation={0}>
          <Segment
            value="second"
            color="blue.500"
            width={width}
            rotation={rotation}
          >
            <Segment
              value="third"
              color="green.500"
              width={width}
              rotation={rotation}
            />
          </Segment>
        </Segment>
      </div>
    </Demo>
  );
}

const NUM_SIDES = 3;
const INTERIOR_ANGLE = 60 * (Math.PI / 180);
const EXTERIOR_ANGLE = Math.PI - INTERIOR_ANGLE;

export function SpiralDemo() {
  const [width, setWidth] = useState(100);
  const [spacing, setSpacing] = useState(20);

  const {height} = useMemo(
    () => measureShape(width, NUM_SIDES, EXTERIOR_ANGLE),
    [width]
  );

  const [inset, outset] = useMemo(() => calcInOutset(spacing, EXTERIOR_ANGLE), [
    spacing
  ]);

  const segments = [];

  while (width > inset) {
    const side = segments.length + 1;

    const [numInsets, numOutsets] = getNumInOutsets(side, NUM_SIDES);
    const sideLength = width - inset * numInsets - outset * numOutsets;

    if (sideLength < inset) {
      break;
    }

    segments.push(sideLength);
  }

  return (
    <Demo
      sliders={[
        {
          label: 'Width',
          min: 100,
          max: 500,
          value: width,
          onChange: setWidth,
          formatValue: value => value + 'px'
        },
        {
          label: 'Spacing',
          min: 10,
          max: 50,
          value: spacing,
          onChange: setSpacing,
          formatValue: value => value + 'px'
        }
      ]}
    >
      <div style={{height}}>
        {segments.reverse().reduce(
          (child, width, index, array) => (
            <div
              style={{
                display: 'flex',
                transformOrigin: 'left',
                transform:
                  index === array.length - 1
                    ? 'translateY(-50%)'
                    : `rotate(${EXTERIOR_ANGLE}rad)`
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width,
                  height: 2,
                  backgroundColor: 'currentcolor'
                }}
              />
              {child}
            </div>
          ),
          null
        )}
      </div>
    </Demo>
  );
}

export function FinishedDemo() {
  const [width, setWidth] = useState(200);
  const [spacing, setSpacing] = useState(20);
  const [fontSize, setFontSize] = useState(20);
  const [text, setText] = useState('change me');
  return (
    <Demo
      sliders={[
        {
          label: 'Width',
          min: 100,
          max: 500,
          value: width,
          onChange: setWidth,
          formatValue: value => value + 'px'
        },
        {
          label: 'Spacing',
          min: 10,
          max: 50,
          value: spacing,
          onChange: setSpacing,
          formatValue: value => value + 'px'
        },
        {
          label: 'Font size',
          min: 10,
          max: 30,
          value: fontSize,
          onChange: setFontSize,
          formatValue: value => value + 'px'
        }
      ]}
    >
      <Input
        size="lg"
        variant="filled"
        autoComplete="off"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <Spiral boxSize={width} fontSize={fontSize} sides={3} spacing={spacing}>
        {text}
      </Spiral>
    </Demo>
  );
}
