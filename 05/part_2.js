import input from "./input.js";
import {
	createMap,
	toCoords,
	overlapingPoints
} from "./shared.js";

const map = createMap(toCoords(input));

console.log(overlapingPoints(map, 2));