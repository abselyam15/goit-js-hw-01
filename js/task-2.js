function getShippingMessage(country, price, deliveryFee) {
	const totalPrice = price + deliveryFee

	console.log(
		`[TASK 2]: Shipping to ${country} will cost ${totalPrice} credits`
	)
}

getShippingMessage('Australia', 120, 50) // "Shipping to Australia will cost 170 credits"
getShippingMessage('Germany', 80, 20) // "Shipping to Germany will cost 100 credits"
getShippingMessage('Sweden', 100, 20) // "Shipping to Sweden will cost 120 credits"
