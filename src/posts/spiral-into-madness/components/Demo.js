import LabelledSlider from "./LabelledSlider";
import PropTypes from "prop-types";
import React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";

export default function Demo({ sliders, children }) {
  return (
    <div>
      <Box borderWidth="1px" rounded="md">
        <Box px="4" pt="4" pb="2" borderBottomWidth="1px">
          <Heading mb="1" size="sm">
            ⏰ Demo time!
          </Heading>
          <HStack spacing="6">
            {sliders.map((slider, index) => (
              <LabelledSlider key={index} {...slider} />
            ))}
          </HStack>
        </Box>
        <Box p="4" overflow="hidden">
          {children}
        </Box>
      </Box>
    </div>
  );
}

Demo.propTypes = {
  sliders: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};
