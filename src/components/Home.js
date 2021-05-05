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
  const [quantity, setQuantity] = useState({ bottles: "0", cases: "0" });

  const [cart, setCart] = useState([]);

  const addToCart = (name, quantity) => {
    setCart((items) => {
      const itemInCart = items.find((i) => i.name === name);

      if (itemInCart) {
        return items.map((i) => (i.name === name ? { ...i, quantity } : i));
      } else {
        return [...items, { name, quantity }];
      }
      console.log(itemInCart);
    });
  }; //end addToCart

  const incrementValue = (e) => {
    e.preventDefault();
    if (e.target.id === "bottles") {
      setQuantity((prevQuantity) => {
        const initialQuantity = prevQuantity;
        console.log(prevQuantity);
        initialQuantity.bottles = initialQuantity.bottles + 1;

        return { ...quantity, bottles: initialQuantity.bottles };
      });
      console.log(quantity);
    }
    if (e.target.id === "cases") {
      setQuantity((prevQuantity) => {
        const initialQuantity = prevQuantity;
        return { ...quantity, cases: initialQuantity.cases + 1 };
      });
      console.log(quantity);
    }
  };

  const decrementValue = (e) => {
    e.preventDefault();
    if (e.target.id === "bottles") {
      setQuantity((prevQuantity) => {
        const initialQuantity = prevQuantity;
        console.log(prevQuantity);
        initialQuantity.bottles = initialQuantity.bottles - 1;

        return { ...quantity, bottles: initialQuantity.bottles };
      });
      console.log(quantity);
    }
    if (e.target.id === "cases") {
      setQuantity((prevQuantity) => {
        const initialQuantity = prevQuantity;
        return { ...quantity, cases: initialQuantity.cases - 1 };
      });
      console.log(quantity);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
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

  const handleChange = (e) => {
    if (e.target.name === "bottles") {
      setQuantity({ ...quantity, bottles: e.target.value });
    }
    if (e.target.name === "cases") {
      setQuantity({ ...quantity, cases: e.target.value });
    }
  };

  return (
    <Box>
      <Center>
        <Logo />
      </Center>
      <Center mb=".4em">
        <Cart
          incrementValue={incrementValue}
          decrementValue={decrementValue}
          data={data}
          cart={cart}
        />
      </Center>
      <Center>
        <FilterMenu buttons={buttons} handleClick={handleClick} />
      </Center>
      <Center>
        <Wines
          addToCart={addToCart}
          data={data}
          filterState={filterState}
          quantity={quantity}
          setQuantity={setQuantity}
          handleChange={handleChange}
        />
      </Center>
    </Box>
  );
};

export default Home;
