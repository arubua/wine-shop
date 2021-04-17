import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/components/theme";
import "@fontsource/raleway/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
