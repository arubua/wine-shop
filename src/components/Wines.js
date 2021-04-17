import React, { useEffect, useState } from "react";
import WineItem from "./WineItem";
import {
  Box,
  VStack,
  StackDivider,
  Stack,
  Spacer,
  Flex,
  Center,
  HStack,
} from "@chakra-ui/react";

const Wines = ({ data, filterState, addToCart }) => {
  console.log({ data, filterState });
  const filterTags = filterState.map((tag) => tag.toLowerCase());

  return (
    <Box m="1em 1em">
      <Stack
        spacing=".2em"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
      >
        {filterState.length === 0 || filterState.length > 1
          ? data.map((item) => (
              <Box key={item.name}>
                <WineItem item={item} addToCart={addToCart} />
              </Box>
            ))
          : data.map((item) => {
              const tags = item.tags;

              for (var i = 0; i < tags.length; i++) {
                if (tags[i].includes(filterTags)) {
                  return (
                    <Box key={item.name}>
                      <WineItem item={item} addToCart={addToCart} />
                    </Box>
                  );
                }
              }
            })}
      </Stack>
    </Box>
  );
};

export default Wines;
