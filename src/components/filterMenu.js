import React, { useState } from "react";
import { Box, Button, Text, HStack } from "@chakra-ui/react";

const FilterMenu = (props) => {
  const { handleClick, buttons } = props;

  return (
    <Box backgroundColor="gray.50" rounded="0" p="1em">
      <HStack justify="space-between" mx="auto" m=".2em">
        <Text>Show Me</Text>
        <Button
          onClick={handleClick}
          value="All"
          variant="ghost"
          rounded="0"
          border="none"
        >
          Show All
        </Button>
      </HStack>
      <HStack mb=".5em">
        {buttons.map(({ name, value, rounded }) => (
          <Button
            key={name}
            value={value}
            rounded={rounded}
            onClick={handleClick}
          >
            {name}
          </Button>
        ))}
      </HStack>
      <HStack justify="space-around" mt=".2em">
        <Text>Order By</Text>
        <Button rounded="0">Price</Button>
        <Button rounded="0">Vintage</Button>
      </HStack>
    </Box>
  );
};

export default FilterMenu;
