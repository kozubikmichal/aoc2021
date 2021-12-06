import input from "./input.js";
import {
	createMap,
	toCoords,
	overlapingPoints
} from "./shared.js";

const nonDiagonal = (coord) => {
	return coord.x1 === coord.x2 || coord.y1 === coord.y2;
}

const coords = toCoords(input).filter(nonDiagonal);

const map = createMap(coords);

console.log(overlapingPoints(map, 2));