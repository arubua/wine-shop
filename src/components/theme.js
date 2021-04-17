import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "35em",
  md: "52em",
  lg: "68em",
  xl: "100em",
  "2xl": "120em",
});

const theme = extendTheme({
  fonts: {
    body: "Raleway",
  },
  breakpoints,
});

export default theme;
