import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  Button,
  Center,
  StackDivider,
  Image,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";

const WineItem = (props) => {
  const [bottleQuantity, setBottleQuantity] = useState("");
  const [caseQuantity, setCaseQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.actions.searchRepoAction(searchQuery);
  };

  const item = props.item;
  return (
    <Box minW="350px">
      <HStack>
        <Center w="100px" h="300px">
          <Image
            h="280px"
            src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${item.image} `}
          />
        </Center>

        <VStack>
          <Center mb=".5em">
            <VStack m="0">
              <Text
                lineHeight="1em"
                fontSize="6em"
                fontWeight="bold"
                color="gray.400"
              >
                {item.no}
              </Text>
              <Text
                lineHeight="1em"
                mt="0"
                fontSize="2em"
                fontWeight="bold"
                color="gray.400"
              >
                {item.name.substring(0, 10)}
              </Text>
            </VStack>
          </Center>
          <Center>
            <VStack>
              <Box>
                <HStack p=".2em">
                  <Box pr="8px" m=".2em" borderRight="2px" borderStyle="dotted">
                    <Box>Bottle</Box>
                    <Box>${item.cost.bottle}</Box>
                    <Box>
                      <HStack>
                        <Input
                          w="1.5em"
                          h="1.5em"
                          rounded="0"
                          color="red"
                          borderColor="black"
                          value={bottleQuantity}
                          onChange={(e) => setBottleQuantity(e.target.value)}
                        />

                        <Text>QTY</Text>
                      </HStack>
                    </Box>
                  </Box>
                  <Box m=".2em">
                    <Box>Case</Box>
                    <Box>${item.cost.case}</Box>
                    <Box>
                      <HStack>
                        <Input
                          w="1.5em"
                          h="1.5em"
                          rounded="0"
                          borderColor="black"
                          value={caseQuantity}
                          onChange={(e) => setCaseQuantity(e.target.value)}
                        />
                        <Text>QTY</Text>
                      </HStack>
                    </Box>
                  </Box>
                </HStack>
              </Box>
              <Box>
                <HStack spacing=".2em">
                  <Button
                    rounded="0"
                    backgroundColor="gray.200"
                    color="gray.800"
                  >
                    Details
                  </Button>

                  <Button
                    disabled={!bottleQuantity && !caseQuantity}
                    onClick={() => {
                      props.addToCart(
                        item.no,
                        item.name,
                        bottleQuantity,
                        caseQuantity
                      );
                      console.log(item.name, item.no);
                    }}
                    rounded="0"
                    backgroundColor="gray.800"
                    color="white"
                  >
                    Add to Cart
                  </Button>
                </HStack>
              </Box>
            </VStack>
          </Center>
        </VStack>
      </HStack>
    </Box>
  );
};

export default WineItem;
