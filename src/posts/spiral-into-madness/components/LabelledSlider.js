import PropTypes from "prop-types";
import React from "react";
import identity from "lodash/identity";
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  chakra,
} from "@chakra-ui/react";

export default function LabelledSlider({
  label,
  value,
  formatValue = identity,
  ...props
}) {
  return (
    <Box w={200} zIndex="0">
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
  formatValue: PropTypes.func,
};
