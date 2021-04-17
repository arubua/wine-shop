import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import {
  Box,
  Center,
  Button,
  VStack,
  Input,
  Container,
} from "@chakra-ui/react";

class Layout extends Component {
  render() {
    return (
      <Box
        mx="auto"
        p={[".2em", ".4em", ".6em", ".8em", "1em"]}
        w={["xs", "md", "lg", "xl", "2xl"]}
      >
        <Center>{this.props.children}</Center>
        <Center>
          <Footer />
        </Center>
      </Box>
    );
  }
}

export default Layout;
