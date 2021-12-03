import input from "./input.js";

const polarity = Array(input[0].length).fill(0)

input.forEach((line) => {
	line.split("").forEach((char, index) => {
		polarity[index] += parseInt(char) ? 1 : -1
	})
});

const gamma = polarity.map((p) => p > 0 ? 1 : 0).join("")
const epsilon = polarity.map((p) => p > 0 ? 0 : 1).join("");

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));