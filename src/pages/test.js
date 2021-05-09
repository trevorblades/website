import PropTypes from 'prop-types';
import React from 'react';
import {Center} from '@chakra-ui/layout';

function Spiral({sides, width, spacing, segments}) {
  const sumAngles = (sides - 2) * 180;
  const eachAngle = sumAngles / sides;
  return (
    <div
      style={{
        width,
        height: width,
        overflow: 'hidden'
      }}
    >
      {segments
        .slice()
        .reverse()
        .reduce((child, value, index, array) => {
          const offset = array.length - index;
          const innerWidth = width - spacing * Math.max(offset - sides + 1, 0);
          return (
            <div
              style={{
                display: 'flex',
                transformOrigin: 'left',
                transform: offset > 1 && `rotate(${180 - eachAngle}deg)`
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  whiteSpace: 'pre',
                  justifyContent: 'space-evenly',
                  width: innerWidth,
                  padding: `0 ${(innerWidth * (spacing / width)) / 2}px`
                }}
              >
                {value.split('').map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </span>
              {child}
            </div>
          );
        }, null)}
    </div>
  );
}

Spiral.propTypes = {
  sides: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  spacing: PropTypes.number.isRequired,
  segments: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default function Test() {
  return (
    <Center
      height="100vh"
      fontWeight="bold"
      fontSize="3xl"
      textTransform="uppercase"
    >
      <Spiral
        sides={3}
        width={500}
        spacing={100}
        segments={['The world of', 'web dev trev', 'is very', 'cool', 'dude']}
      />
    </Center>
  );
}
