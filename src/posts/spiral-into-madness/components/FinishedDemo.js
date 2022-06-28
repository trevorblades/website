import Demo from "./Demo";
import React, { useState } from "react";
import Spiral from "react-spiral";
import { Input } from "@chakra-ui/react";

export function FinishedDemo() {
  const [width, setWidth] = useState(200);
  const [spacing, setSpacing] = useState(20);
  const [fontSize, setFontSize] = useState(20);
  const [text, setText] = useState("change me");
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
        {
          label: "Font size",
          min: 10,
          max: 30,
          value: fontSize,
          onChange: setFontSize,
          formatValue: (value) => value + "px",
        },
      ]}
    >
      <Input
        size="lg"
        variant="filled"
        autoComplete="off"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Spiral boxSize={width} fontSize={fontSize} sides={3} spacing={spacing}>
        {text}
      </Spiral>
    </Demo>
  );
}
