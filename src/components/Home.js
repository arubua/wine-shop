import { Box, Image, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import FilterMenu from './filterMenu'
import Wines from './Wines'

const Logo = () => {
	return (
		<Center m=".7em">
			<Image w="200" h="50px" src="/logo.png" />
		</Center>
	)
}

const buttons = [
	{ name: 'White', value: 'White', rounded: '0' },
	{ name: 'Red', value: 'Red', rounded: '0' },
	{ name: 'Sparkling', value: 'Sparkling', rounded: '0' },
]

const Home = ({ rawdata }) => {
	const [filterState, setFilterState] = useState([])
	const [data, setData] = useState(rawdata)

	const [cart, setCart] = useState([])

	useEffect(() => {
		const updatedItems = data.map(item => ({
			...item,
			quantity: { bottles: 0, cases: 0 },
		}))

		setData(updatedItems)
	}, [])

	const addToCart = (item, quantity) => {
    setCart(items => {
      const itemInCartIndex = items.findIndex(cartItem => cartItem.name === item.name);
  
      if (itemInCartIndex !== -1) {
        // If the item is already in the cart, update its quantity and other properties.
        const updatedItems = [...items];
        updatedItems[itemInCartIndex] = { ...items[itemInCartIndex], ...item, quantity };
        return updatedItems;
      } else {
        // If the item is not in the cart, add it with all properties.
        return [...items, { ...item, quantity }];
      }
    });
  }//end addToCart

  const handleDelete = (itemName) => {
    setCart(items => {
      const updatedItems = items.filter(item => item.name !== itemName);
      return updatedItems;
    });
  }

	const incrementValue = e => {
		e.preventDefault()
		if (e.target.id === 'bottles') {
			setData(prevQuantity => {
				const initialQuantity = prevQuantity
				initialQuantity.bottles = initialQuantity.bottles + 1

				return { ...data, bottles: initialQuantity.bottles }
			})
		}
		if (e.target.id === 'cases') {
			setData(prevQuantity => {
				const initialQuantity = prevQuantity
				return { ...data, cases: initialQuantity.cases + 1 }
			})
		}
	}

	const decrementValue = e => {
		e.preventDefault()
		if (e.target.id === 'bottles') {
			setData(prevQuantity => {
				const initialQuantity = prevQuantity
				initialQuantity.bottles = initialQuantity.bottles - 1

				return { ...data, bottles: initialQuantity.bottles }
			})
		}
		if (e.target.id === 'cases') {
			setData(prevQuantity => {
				const initialQuantity = prevQuantity
				return { ...data, cases: initialQuantity.cases - 1 }
			})
		}
	}

	const handleClick = e => {
		e.preventDefault()
		let filterStates = []

		if (e.target.value === 'All') {
			filterStates = buttons.map(button => {
				return button.name
			})
		} else {
			filterStates = [...filterStates, e.target.value]
		}
		return setFilterState(filterStates)
	}

	const handleChange = (q, type, item) => {
		setData(prevData => {
			return prevData.map(wine => {
				if (wine.no === item.no) {
					const newQuantity = {
						...wine.quantity,
						[type]: q,
					}
					return { ...wine, quantity: newQuantity }
				} else {
					return wine
				}
			})
		})
	}

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
          handleDelete={handleDelete}
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
					// quantity={data}
					setData={setData}
					handleChange={handleChange}
				/>
			</Center>
		</Box>
	)
}

export default Home
