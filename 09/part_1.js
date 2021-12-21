import input from "./input.js";

let sum = 0;

for (let r = 0; r < input.length; ++r) {
	for (let c = 0; c < input[r].length; ++c) {
		const isMin = [
			[r - 1, c],
			[r + 1, c],
			[r, c - 1],
			[r, c + 1]
		].reduce((acc, [x, y]) => {
			if (input[x] && input[x][y] !== undefined) {
				return acc && input[x][y] > input[r][c];
			}
			return acc;
		}, true)

		if (isMin) {
			sum += parseInt(input[r][c], 10) + 1;
		}
	}
}

console.log(sum);