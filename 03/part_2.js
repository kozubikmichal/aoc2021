import input from "./input.js";

const mostCommonBit = (data, position) => {
	const sum = data.reduce((acc, line) => {
		return acc + (parseInt(line[position]) > 0 ? 1 : -1)
	}, 0);

	return sum >= 0 ? 1 : 0
}

const leastCommonBit = (data, position) => 1 - mostCommonBit(data, position);

const computeRating = (data, findBitValue) => {
	for (let i = 0; data.length > 1; i++) {
		let bitValue = findBitValue(data, i);
		data = data.filter((line) => line[i] === bitValue.toString());
	}

	return data;
}

const oxygenRating = computeRating(input, mostCommonBit);
const co2Rating = computeRating(input, leastCommonBit);

console.log(parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));