import { Box, Image, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import Cart from "./Cart";
import FilterMenu from "./filterMenu";
import Wines from "./Wines";

const Logo = () => {
  return (
    <Center m=".7em">
      <Image w="200" h="50px" src="/logo.png" />
    </Center>
  );
};

const buttons = [
  { name: "White", value: "White", rounded: "0" },
  { name: "Red", value: "Red", rounded: "0" },
  { name: "Sparkling", value: "Sparkling", rounded: "0" },
];

const Home = ({ data }) => {
  const [filterState, setFilterState] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (no, name, bottleQuantity, caseQuantity) => {
    setCart((items) => {
      const itemInCart = items.find((i) => i.no === no);
      if (itemInCart) {
        return items.map((i) =>
          i.no === no ? { ...i, quantity: quantity } : i
        );
      } else {
        return [...items, { no, name, quantity: 1 }];
      }
    });
  };

  const handleClick = (e) => {
    let filterStates = [];

    if (e.target.value === "All") {
      filterStates = buttons.map((button) => {
        return button.name;
      });
    } else {
      filterStates = [...filterStates, e.target.value];
    }
    return setFilterState(filterStates);
  };
  console.log(filterState);
  return (
    <Box>
      <Center>
        <Logo />
      </Center>
      <Center mb=".4em">
        <Cart data={data} cart={cart} />
      </Center>
      <Center>
        <FilterMenu buttons={buttons} handleClick={handleClick} />
      </Center>
      <Center>
        <Wines addToCart={addToCart} data={data} filterState={filterState} />
      </Center>
    </Box>
  );
};

export default Home;
