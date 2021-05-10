import PropTypes from 'prop-types';
import React from 'react';
import {Center} from '@chakra-ui/react';

function Spiral({sides, width, spacing, segments}) {
  // shoutout
  // https://www.mathsisfun.com/geometry/interior-angles-polygons.html
  // https://educationisaround.com/sohcahtoa/
  // right triangle with two equal sides: http://www.math.com/school/subject3/lessons/S3U3L4DP.html#:~:text=A%20right%20triangle%20can%20also,that%20is%20an%20isosceles%20triangle.
  // bounding box of ngon: http://calcresource.com/geom-ngon.html
  const sumAngles = (sides - 2) * 180;
  const interiorAngle = sumAngles / sides;
  const inset = Math.cos(interiorAngle * (Math.PI / 180)) * spacing * 2;
  const centralAngle = (Math.PI * 2) / sides;
  const sideLength = (width / 2) * (Math.sin(centralAngle / 2) * 2);
  return (
    <div
      style={{
        width,
        height: width,
        padding: `0 ${(width - sideLength) / 2}px`,
        overflow: 'hidden'
      }}
    >
      {segments
        .slice()
        .reverse()
        .reduce((child, value, index, array) => {
          const offset = array.length - index;

          const ahead = Math.floor(offset / sides);
          const middle = Math.max(Math.floor((offset - 1) / sides), 0);
          const behind = Math.max(Math.floor((offset - 2) / sides), 0);
          const combined = ahead + behind;

          const innerWidth = sideLength - combined * spacing - inset * middle;
          if (innerWidth < spacing) {
            return null;
          }

          return (
            <div
              style={{
                display: 'flex',
                transformOrigin: 'left',
                transform: offset > 1 && `rotate(${180 - interiorAngle}deg)`
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  whiteSpace: 'pre',
                  justifyContent: 'space-evenly',
                  width: innerWidth,
                  padding: `0 ${(innerWidth * (spacing / width)) / 2}px`,
                  backgroundColor: 'paleturquoise'
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
        sides={6}
        width={500}
        spacing={100}
        segments={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26'
        ]}
      />
    </Center>
  );
}
