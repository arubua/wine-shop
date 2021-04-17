import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import Wines from "./Wines";

const Logo = () => {
  return (
    <Box>
      <Image w="200" h="50px" src="/logo.png" />
    </Box>
  );
};

const FilterMenu = () => {
  return (
    <Box backgroundColor="gray.50" rounded="0" p=".5em">
      <HStack m=".2em">
        <Text>Show Me</Text>
        <Button variant="ghost" flexDir="reversed" rounded="0" border="none">
          Show All
        </Button>
      </HStack>
      <HStack m=".2em">
        <Button rounded="0">White</Button>
        <Button rounded="0">Red</Button>
        <Button rounded="0">Sparkling</Button>
      </HStack>
      <HStack m=".2em">
        <Text>Order By</Text>
        <Button rounded="0">Price</Button>
        <Button rounded="0">Vintage</Button>
      </HStack>
    </Box>
  );
};

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Box mt=".2em">
      <Center>
        <Link href="/login">
          <Button mx=".5em" variant="link" rounded="0">
            Login
          </Button>
        </Link>
        <InputGroup>
          <InputLeftElement children={<Search2Icon color="gray.400" />} />
          <Input
            rounded="0"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            name="search"
          />
        </InputGroup>
        <PhoneIcon mx=".5em" />
      </Center>
      <Center>
        <Logo />
      </Center>
      <Center>
        <FilterMenu />
      </Center>
      <Center>
        <Wines />
      </Center>
    </Box>
  );
};

export default Header;
