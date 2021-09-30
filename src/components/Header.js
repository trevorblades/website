import React from 'react';
import {
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react';
import {FaTwitch} from 'react-icons/fa';
import {FiMoon, FiSun} from 'react-icons/fi';
import {Link as GatsbyLink} from 'gatsby';
import {Global} from '@emotion/react';

export const HEADER_HEIGHT = 12;

export default function Header(props) {
  const theme = useTheme();
  const {colorMode, toggleColorMode} = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  return (
    <>
      <Global
        styles={{
          html: {
            scrollPaddingTop: theme.sizes[HEADER_HEIGHT]
          }
        }}
      />
      <Flex
        w="full"
        h={HEADER_HEIGHT}
        px="4"
        align="center"
        as="header"
        pos="sticky"
        top="0"
        zIndex="1"
        bgColor={bgColor}
        {...props}
      >
        <Circle
          size="6"
          mr="2"
          borderWidth="2px"
          borderColor="current"
          fontFamily="heading"
          fontWeight="semibold"
          lineHeight="none"
          fontSize="xl"
        >
          t
        </Circle>
        <Heading
          as="h1"
          fontSize="2xl"
          letterSpacing="tighter"
          lineHeight="none"
          whiteSpace="nowrap"
        >
          <GatsbyLink to="/">Trevor Blades</GatsbyLink>
        </Heading>
        <HStack spacing="5" ml="auto">
          <Link as={GatsbyLink} to="/#about">
            about me
          </Link>
          <Link as={GatsbyLink} to="/#projects">
            projects
          </Link>
          <Link as={GatsbyLink} to="/#lab">
            lab
          </Link>
          <Link as={GatsbyLink} to="/#oss">
            oss
          </Link>
          <HStack>
            <IconButton
              onClick={toggleColorMode}
              size="sm"
              icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
              fontSize="xl"
              variant="ghost"
            />
            <Button
              as="a"
              href="https://twitch.tv/trevorblades"
              size="sm"
              fontSize="md"
              colorScheme="purple"
              rightIcon={<FaTwitch />}
            >
              subscribe
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </>
  );
}