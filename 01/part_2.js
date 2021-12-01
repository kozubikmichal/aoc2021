import input from "./input.js";
import {
	countIncreased,
	sum
} from "./math.js";

const sums = [];

for (let i = 2; i < input.length; ++i) {
	sums.push(
		sum(input[i - 2], input[i - 1], input[i])
	)
}

console.log(countIncreased(sums));