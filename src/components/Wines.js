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
  Divider,
} from "@chakra-ui/react";

const Wines = ({
  data,
  filterState,
  addToCart,

  handleChange,
  quantity,
  setQuantity,
}) => {
  const filterTags = filterState.map((tag) => tag.toLowerCase());

  return (
    <Center maxW="2500px" w="90vw" display="flex" flexWrap="wrap">
      {filterState.length === 0 || filterState.length > 1
        ? data.map((item) => (
            <Box maxW="600px" mt="1em" key={item.name}>
              <WineItem
                item={item}
                addToCart={addToCart}
                quantity={quantity}
                setQuantity={setQuantity}
                handleChange={handleChange}
              />
              <Divider m=".3em" orientation="horizontal" />
            </Box>
          ))
        : filterState[0] === "price"
        ? data
            .sort((a, b) => (a.cost.bottle > b.cost.bottle ? 1 : -1))
            .map((item) => (
              <Box mt="1em" key={item.name}>
                <WineItem
                  item={item}
                  addToCart={addToCart}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  handleChange={handleChange}
                />
                <Divider m=".3em" orientation="horizontal" />
              </Box>
            ))
        : data.map((item) => {
            const tags = item.tags;

            for (var i = 0; i < tags.length; i++) {
              if (tags[i].includes(filterTags)) {
                return (
                  <Box mt="1em" key={item.name}>
                    <WineItem
                      item={item}
                      addToCart={addToCart}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleChange={handleChange}
                    />
                    <Divider m=".3em" orientation="horizontal" />
                  </Box>
                );
              }
            }
          })}
    </Center>
  );
};

export default Wines;
