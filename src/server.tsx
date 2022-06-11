import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ServePageHook } from "rakkasjs";

export const servePage: ServePageHook = async (request, renderPage) =>
  renderPage(
    request,
    {},
    {
      wrap: (page) => <ChakraProvider>{page}</ChakraProvider>,
    }
  );
