import input from "./input.js";

const position = {
	horizontal: 0,
	depth: 0
}

const instructionSet = {
	"forward": (position, value) => position.horizontal += value,
	"down": (position, value) => position.depth += value,
	"up": (position, value) => position.depth -= value
};

input.forEach((line) => {
	const [instruction, value] = line.split(" ");

	instructionSet[instruction](position, parseInt(value));
})

console.log(position.horizontal * position.depth);