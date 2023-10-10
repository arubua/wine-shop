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
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";

const CartItem = ({ itemInCart, data, getTotal,handleDelete }) => {
  if (itemInCart.length !== 0) {
    const { name, quantity } = itemInCart;

    const { no, image, cost } = data.find((item) => item.name === name);
    const subTotal =
      Math.round(
        (cost.bottle * quantity.bottles + cost.case * quantity.cases) * 100
      ) / 100;
    getTotal(subTotal);

    return (
      <Box key="no" m="1em" textAlign="left" minW="300px">
        <HStack>
          <Center w="40px">
            <Image
              h="130px"
              src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${image} `}
            />
          </Center>

          <VStack>
            <Box maxW="250px">
              <Text
                lineHeight="1em"
                fontSize="1.3em"
                fontWeight="bold"
                color="gray.800"
              >
                {no} {name.toLowerCase()}
              </Text>
            </Box>
            <Box pt="1em" minW="250px">
              <Box>
                <HStack spacing="3em">
                  <Box
                    w="8em"
                    color="gray.500"
                    fontWeight="regular"
                    fontSize="l"
                  >
                    bottles @ ${cost.bottle}
                  </Box>

                  <Center w="25px" fontWeight="bold" fontSize="l">
                    {quantity.bottles}
                  </Center>
                </HStack>

                <HStack spacing="3em">
                  <Box
                    w="8em"
                    color="gray.500"
                    fontWeight="regular"
                    fontSize="l"
                  >
                    cases @ ${cost.case}
                  </Box>

                  <Center w="25px" fontWeight="bold" fontSize="l">
                    {quantity.cases}
                  </Center>
                </HStack>
              </Box>
              <Box>
                <HStack mt=".4em" spacing="3em">
                  <Box w="8em" fontSize="l">
                    sub-total
                  </Box>

                  <Center
                    borderTop="1px"
                    borderStyle="solid"
                    m=".2em"
                    color="gray.500"
                    textAlign="right"
                    w="25px"
                    fontWeight="bold"
                    fontSize="l"
                  >
                    ${subTotal}
                  </Center>
                </HStack>
              </Box>
            </Box>
          </VStack>
          <Center h="130px" ml=".4em">
            <IconButton
              colorScheme="red"
              aria-label="Call Segun"
              size="xs"
              mt="0"
              onClick={() => handleDelete(name)}
              icon={<DeleteIcon />}
            />
          </Center>
        </HStack>
      </Box>
    );
  }
};

export default CartItem;
