import React, { useState } from 'react'
import { UnorderedList, Box, Heading, Center } from '@chakra-ui/react'
import CartItem from './CartItem'

const Cart = ({ cart, data,handleDelete }) => {

  console.log("cart",cart)

	const getTotal = () => {
		if (!Array.isArray(cart) || cart.length === 0) {
			return 0 // Return 0 if the cart is empty or not an array
		}

		const total = cart.reduce((accumulator, item) => {
			// Extract the quantities and costs for bottles and cases
			const { bottles: itemBottles, cases: itemCases } = item.quantity
			const { bottle: itemBottleCost, case: itemCaseCost } = item.cost

			// Parse the quantities and costs as numbers
			const bottles = parseInt(itemBottles) || 0
			const cases = parseInt(itemCases) || 0
			const bottleCost = parseFloat(itemBottleCost) || 0
			const caseCost = parseFloat(itemCaseCost) || 0

			// Calculate the subtotal for bottles and cases separately
			const subtotalBottles = bottles * bottleCost
			const subtotalCases = cases * caseCost

			// Add the subtotal for bottles and cases to the accumulator
			return accumulator + subtotalBottles + subtotalCases
		}, 0)

		return total
	}//end getTotal

  
  

	const numItemsInCart = cart.length

	return (
		<Box>
			<Center>
				<Heading fontSize="s">
					{numItemsInCart === 0
						? 'Your cart is empty'
						: `${numItemsInCart} Item${numItemsInCart > 1 ? 's' : ''} in Cart`}
				</Heading>
			</Center>
			<Center>
				<UnorderedList>
					{cart.map(itemInCart => (
						<CartItem
							getTotal={getTotal}
							key="item.no"
							data={data}
							itemInCart={itemInCart}
              handleDelete={handleDelete}
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
	)
}

export default Cart
