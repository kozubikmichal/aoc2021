import input from "./input.js"

const sum = (values) => values.reduce((acc, value) => acc + value, 0);

const average = (values) => {
	return Math.floor(sum(values) / values.length);
}

const sumDown = (value) => {
	if (value === 0) {
		return 0;
	} else {
		return value + sumDown(value - 1);
	}
}

const bestPosition = average(input);

const fuelCosts = input.map((position) => sumDown(Math.abs(position - bestPosition)));

console.log(sum(fuelCosts));