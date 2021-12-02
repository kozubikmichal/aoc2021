export function runProgram(instructionSet, state, input) {

	input.forEach((line) => {
		const [instruction, value] = line.split(" ");

		instructionSet[instruction](state, parseInt(value));
	})
}