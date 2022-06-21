import PropTypes from "prop-types";
import React from "react";
import { chakra } from "@chakra-ui/react";

export default function Extender({ children, factor = 2 }) {
  const isUpper = children.toUpperCase() === children;
  const modifier = isUpper ? 1.2 : 1;
  return (
    <chakra.span
      textAlign="left"
      display="inline-block"
      w={factor * modifier + "ch"}
    >
      <chakra.span
        display="inherit"
        transformOrigin="left"
        transform={`scaleX(${factor})`}
      >
        {children}
      </chakra.span>
    </chakra.span>
  );
}

Extender.propTypes = {
  children: PropTypes.string.isRequired,
  factor: PropTypes.number,
};
