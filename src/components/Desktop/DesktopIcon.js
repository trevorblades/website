import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { Box, Flex, useOutsideClick } from "@chakra-ui/react";

export default function DesktopIcon({ icon, title, description }) {
  const ref = useRef();
  const [selected, setSelected] = useState(false);

  useOutsideClick({
    ref,
    handler: () => setSelected(false),
  });

  return (
    <Flex
      align="center"
      dir="ltr"
      ref={ref}
      onClick={(event) => setSelected(event.target !== event.currentTarget)}
      cursor="default"
      userSelect="none"
      lineHeight="none"
    >
      <Box
        fontSize="4xl"
        mr="2"
        shadow={selected && "outline"}
        bg={selected && "blackAlpha.100"}
        rounded="sm"
      >
        <span>{icon}</span>
      </Box>
      <Flex
        direction="column"
        align="flex-start"
        fontSize="sm"
        fontWeight="bold"
        color="white"
        css={({ theme }) => ({
          textShadow: `0 1px 2px ${theme.colors.blackAlpha[600]}`,
        })}
      >
        <Box
          p="0.5"
          rounded="sm"
          bg={selected && "blue.500"}
          textShadow={selected && "none"}
        >
          {title}
        </Box>
        <Box p="0.5" fontSize="xs">
          {description}
        </Box>
      </Flex>
    </Flex>
  );
}

DesktopIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
