import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "::selection": {
        bgColor: "pink.400",
      },
    },
  },
  fonts: {
    heading: "Poppins, Helvetica, sans-serif",
    body: "Roboto, Helvetica, sans-serif",
    mono: "'Fira Code', monospace",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "semibold",
      },
    },
  },
});

export default theme;
