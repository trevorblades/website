import Demo from "./Demo";
import React, { useState } from "react";
import Segment from "./Segment";

export function CaterpillarDemo() {
  const [width, setWidth] = useState(100);
  const [rotation, setRotation] = useState(0);
  return (
    <Demo
      sliders={[
        {
          label: "Width",
          min: 50,
          max: 300,
          value: width,
          onChange: setWidth,
          formatValue: (value) => value + "px",
        },
        {
          label: "Rotation",
          min: 0,
          max: 120,
          value: rotation,
          onChange: setRotation,
          formatValue: (value) => value + "°",
        },
      ]}
    >
      <div
        style={{
          height:
            width +
            // get the height of the second segment when it's turned 45deg
            // it is essential the hypoteneuse of a right triangle where both
            // of the other sides are equal
            Math.sqrt(width ** 2 / 2),
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
