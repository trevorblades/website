import React from 'react';
import {Button, Circle, Flex, HStack, Heading, Link} from '@chakra-ui/react';
import {FaTwitch} from 'react-icons/fa';
import {Link as GatsbyLink} from 'gatsby';
import {Global} from '@emotion/react';

export default function Header(props) {
  return (
    <>
      <Global
        styles={{
          html: {
            scrollPaddingTop: 48
          }
        }}
      />
      <Flex
        w="full"
        h="12"
        px="4"
        align="center"
        as="header"
        pos="fixed"
        top="0"
        zIndex="1"
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
        >
          Trevor Blades
        </Heading>
        <HStack spacing="5" ml="auto">
          <Link href="#about">about me</Link>
          <Link href="#projects">projects</Link>
          <Link href="#oss">oss</Link>
          <Link as={GatsbyLink} to="/garden">
            lab
          </Link>
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
      </Flex>
    </>
  );
}
