import input from "./input.js";
import {
	runProgram
} from "./processor.js";

const position = {
	horizontal: 0,
	depth: 0
}

const instructionSet = {
	"forward": (state, value) => state.horizontal += value,
	"down": (state, value) => state.depth += value,
	"up": (state, value) => state.depth -= value
};

runProgram(instructionSet, position, input);

console.log(position.horizontal * position.depth);