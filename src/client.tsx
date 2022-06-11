import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { defineClientHooks } from "rakkasjs";

export default defineClientHooks({
  wrap: (app) => <ChakraProvider>{app}</ChakraProvider>,
});
