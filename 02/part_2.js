import input from "./input.js";
import {
	runProgram
} from "./processor.js";

const position = {
	horizontal: 0,
	depth: 0,
	aim: 0
}

const instructionSet = {
	"forward": (state, value) => {
		state.horizontal += value;
		state.depth += state.aim * value;
	},
	"down": (state, value) => state.aim += value,
	"up": (state, value) => state.aim -= value
};

runProgram(instructionSet, position, input);

console.log(position.horizontal * position.depth);