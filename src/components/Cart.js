import React, { useState } from "react";
import { UnorderedList, Box, Heading, Center } from "@chakra-ui/react";
import CartItem from "./CartItem";

const Cart = ({ cart, data }) => {
  const subTotals = [];

  const getTotal = (subTotal) => {
    subTotals.push(subTotal);
    console.log(subTotals);
    const reducer = (a, b) => {
      return a + b;
    };
    const total = subTotals.reduce(reducer);

    return total;
  };

  const numItemsInCart = cart.length;

  return (
    <Box>
      <Center>
        <Heading fontSize="s">
          {numItemsInCart === 0
            ? "Your cart is empty"
            : `${numItemsInCart} Item${numItemsInCart > 1 ? "s" : ""} in Cart`}
        </Heading>
      </Center>
      <Center>
        <UnorderedList>
          {cart.map((itemInCart) => (
            <CartItem
              getTotal={getTotal}
              key="item.no"
              data={data}
              itemInCart={itemInCart}
            />
          ))}
        </UnorderedList>
      </Center>
      {cart.length !== 0 ? (
        <Center borderTop="1px" borderStyle="solid">
          Total:{getTotal()}
        </Center>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default Cart;
