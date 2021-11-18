import PropTypes from 'prop-types';
import React, {useMemo, useRef, useState} from 'react';
import {Box, Flex, useOutsideClick, useTheme} from '@chakra-ui/react';

export default function DesktopIcon({icon, title, description}) {
  const ref = useRef();
  const {colors} = useTheme();
  const [selected, setSelected] = useState(false);
  const textShadow = useMemo(() => `0 1px 2px ${colors.blackAlpha[800]}`, [
    colors.blackAlpha
  ]);

  useOutsideClick({
    ref,
    handler: () => setSelected(false)
  });

  return (
    <Flex
      align="center"
      dir="ltr"
      ref={ref}
      onClick={event => setSelected(event.target !== event.currentTarget)}
      cursor="default"
      userSelect="none"
      lineHeight="none"
    >
      <Box
        fontSize="4xl"
        mr="2"
        shadow={selected && 'outline'}
        bg={selected && 'blackAlpha.100'}
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
        textShadow={!selected && `0 1px 2px ${colors.blackAlpha[800]}`}
      >
        <Box
          p="0.5"
          rounded="sm"
          bg={selected && 'blue.500'}
          textShadow={!selected && `0 1px 2px ${colors.blackAlpha[800]}`}
        >
          {title}
        </Box>
        <Box p="0.5" fontSize="xs" textShadow={textShadow}>
          {description}
        </Box>
      </Flex>
    </Flex>
  );
}

DesktopIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
