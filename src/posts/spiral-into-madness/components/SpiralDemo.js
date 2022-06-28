import Demo from "./Demo";
import React, { useMemo, useState } from "react";
import { calcInOutset, getNumInOutsets, measureShape } from "react-spiral";

const NUM_SIDES = 3;
const INTERIOR_ANGLE = 60 * (Math.PI / 180);
const EXTERIOR_ANGLE = Math.PI - INTERIOR_ANGLE;

export function SpiralDemo() {
  const [width, setWidth] = useState(100);
  const [spacing, setSpacing] = useState(20);

  const { height } = useMemo(
    () => measureShape(width, NUM_SIDES, EXTERIOR_ANGLE),
    [width]
  );

  const [inset, outset] = useMemo(
    () => calcInOutset(spacing, EXTERIOR_ANGLE),
    [spacing]
  );

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
          label: "Width",
          min: 100,
          max: 500,
          value: width,
          onChange: setWidth,
          formatValue: (value) => value + "px",
        },
        {
          label: "Spacing",
          min: 10,
          max: 50,
          value: spacing,
          onChange: setSpacing,
          formatValue: (value) => value + "px",
        },
      ]}
    >
      <div style={{ height }}>
        {segments.reverse().reduce(
          (child, width, index, array) => (
            <div
              style={{
                display: "flex",
                transformOrigin: "left",
                transform:
                  index === array.length - 1
                    ? "translateY(-50%)"
                    : `rotate(${EXTERIOR_ANGLE}rad)`,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width,
                  height: 2,
                  backgroundColor: "currentcolor",
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
