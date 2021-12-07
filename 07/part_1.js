import input from "./input.js"

const median = (values) => {
	values.sort((a, b) => a - b);

	const middle = Math.floor(values.length / 2);

	return values[middle];
}

const bestPosition = median(input);

const fuelCosts = input.map((position) => Math.abs(position - bestPosition));

console.log(
	fuelCosts.reduce((sum, cost) => sum + cost, 0)
);