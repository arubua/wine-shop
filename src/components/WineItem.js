import React, { useState } from 'react'
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
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const WineItem = props => {
	const { item, quantity, handleChange, addToCart } = props

	const router = useRouter()

	const handleButtonClick = id => {
		// Use the `push` method of the router to navigate to the desired URL
		router.push(`details/${id}`)
	}

	return (
		<Box minW="320px">
			<HStack>
				<Center w="80px" h="300px">
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
												<NumberInput
													min={0}
													name="bottles"
													value={quantity?.bottles}
													onChange={q => handleChange(q, 'bottles', item)}
												>
													<NumberInputField
														p="0"
														w="4em"
														h="3em"
														rounded="0"
														name="bottles"
														borderColor="black"
													/>
													<NumberInputStepper>
														<NumberIncrementStepper />
														<NumberDecrementStepper />
													</NumberInputStepper>
												</NumberInput>

												<Text>QTY</Text>
											</HStack>
										</Box>
									</Box>
									<Box m=".2em">
										<Box>Case</Box>
										<Box>${item.cost.case}</Box>
										<Box>
											<HStack>
												<NumberInput
													min={0}
													name="cases"
													value={quantity?.cases}
													onChange={q => handleChange(q, 'cases', item)}
												>
													<NumberInputField
														p="0"
														w="4em"
														h="3em"
														rounded="0"
														name="cases"
														borderColor="black"
													/>
													<NumberInputStepper>
														<NumberIncrementStepper />
														<NumberDecrementStepper />
													</NumberInputStepper>
												</NumberInput>
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
										onClick={() => handleButtonClick(item.no)}
									>
										Details
									</Button>

									<Button
										type="submit"
										disabled={quantity?.bottles < 1 && quantity?.cases < 1}
										onClick={() => addToCart(item, quantity)}
										rounded="0"
										backgroundColor="black"
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
	)
}

export default WineItem
