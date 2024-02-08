function getElementWidth(content, padding, border) {
	const firstNum = Number.parseFloat(content)
	const secondNum = Number.parseFloat(padding)
	const thirdNum = Number.parseFloat(border)
	const sum = firstNum + secondNum * 2 + thirdNum * 2
	console.log(`[TASK 3]: ${sum}`)
}

getElementWidth('50px', '8px', '4px') // 74
getElementWidth('60px', '12px', '8.5px') // 101
getElementWidth('200px', '0px', '0px') // 200
