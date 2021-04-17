import React from "react";
import {
  UnorderedList,
  Box,
  Image,
  HStack,
  Text,
  Heading,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import useFetchAll from "../services/useFetchAll";

const Cart = ({ cart, updateQuantity, data }) => {
  function renderItem(itemInCart) {
    const { no, name, quantity } = itemInCart;

    const { cost, image } = data.find((p) => p.no == parseInt(no));

    return (
      <Box mx="auto">
        <HStack>
          <Center w="50px" h="50px">
            <Image
              h="50px"
              src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${image} `}
            />
          </Center>

          <Box>
            <Text>{name}</Text>
          </Box>
          <Box>
            <Text>${cost.bottle}</Text>
          </Box>
          <Box>{quantity}</Box>
          <Spacer />
          <HStack>
            <AddIcon />
            <MinusIcon />
            <DeleteIcon />
          </HStack>
        </HStack>
      </Box>
    );
  }

  const numItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box backgroundColor="gray.50" as="section">
      <Center>
        <Heading fontSize="s">
          {numItemsInCart === 0
            ? "Your cart is empty"
            : `${numItemsInCart} Item${
                numItemsInCart > 1 ? "s" : ""
              } in My Cart`}
        </Heading>
      </Center>
      <Center>
        <UnorderedList>{cart.map(renderItem)}</UnorderedList>
      </Center>
    </Box>
  );
};

export default Cart;
