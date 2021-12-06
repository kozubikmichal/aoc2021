import input from "./input.js";

const Days = 80;

const simulateDay = (state) => {
	const newState = [];

	state.forEach((timer) => {
		switch (timer) {
			case 0: {
				newState.push(6);
				newState.push(8);
				break;
			}
			default: {
				newState.push(timer - 1);
				break;
			}
		}
	});

	return newState;
}

let fishList = input;

for (let i = 0; i < Days; i++) {
	fishList = simulateDay(fishList);
}

console.log(fishList.length);