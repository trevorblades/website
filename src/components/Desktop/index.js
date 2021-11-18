import BatteryIndicator from './BatteryIndicator';
import DesktopIcon from './DesktopIcon';
import React from 'react';
import orca from '../../assets/orca.jpg';
import {Box, Circle, Flex, Grid, HStack} from '@chakra-ui/react';
import {FaSkull} from 'react-icons/fa';
import {Rnd} from 'react-rnd';

export default function Desktop() {
  return (
    <Flex
      direction="column"
      h="100vh"
      bgImage={`url(${orca})`}
      bgSize="cover"
      bgPos="center"
    >
      <Flex as="header" h="6" bg="blackAlpha.500" px="4" fontSize="sm">
        <HStack spacing="4">
          <FaSkull />
          <strong>Finder</strong>
          <span>File</span>
          <span>Edit</span>
        </HStack>
        <HStack spacing="4" ml="auto">
          <BatteryIndicator />
        </HStack>
      </Flex>
      <Grid
        h="0"
        flexGrow="1"
        p="4"
        gap="4"
        autoFlow="column"
        autoColumns="200px"
        templateRows="repeat(auto-fit, 40px)"
        dir="rtl"
        pos="relative"
        overflow="hidden"
      >
        <DesktopIcon
          icon="💿"
          title="My Mixtape"
          description="Some of my websites"
        />
        <DesktopIcon
          icon="📁"
          title="Sites"
          description="Some of my websites"
        />
        <Rnd
          bounds="parent"
          dragHandleClassName="handle"
          default={{x: 100, y: 100}}
        >
          <Box
            dir="ltr"
            h="full"
            bg="white"
            rounded="xl"
            overflow="hidden"
            borderWidth="1px"
            css={({theme}) => {
              const {xs, lg} = theme.shadows;
              return {
                boxShadow: [xs, lg].toString()
              };
            }}
          >
            <Box h="7" p="2" className="handle" bg="gray.200">
              <HStack>
                <Circle
                  size="3"
                  bg="red.400"
                  borderColor="red.500"
                  borderWidth="1px"
                />
                <Circle
                  size="3"
                  bg="yellow.400"
                  borderColor="yellow.500"
                  borderWidth="1px"
                />
                <Circle
                  size="3"
                  bg="green.400"
                  borderColor="green.500"
                  borderWidth="1px"
                />
              </HStack>
            </Box>
            this is a test
          </Box>
        </Rnd>
      </Grid>
    </Flex>
  );
}
