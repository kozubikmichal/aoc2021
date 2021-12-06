import input from "./input.js";

const toCoords = (data) => {
	return data.map((line) => {
		const match = line.match(/(?<x1>\d+),(?<y1>\d+) -> (?<x2>\d+),(?<y2>\d+)/)

		return {
			x1: parseInt(match.groups.x1, 10),
			y1: parseInt(match.groups.y1, 10),
			x2: parseInt(match.groups.x2, 10),
			y2: parseInt(match.groups.y2, 10)
		}
	})
}

const calculateStep = (from, to) => {
	if (from < to) {
		return 1;
	}
	if (from > to) {
		return -1;
	}
	return 0;
}

const nonDiagonal = (coord) => {
	return coord.x1 === coord.x2 || coord.y1 === coord.y2;
}

const addToMap = (map, x, y) => {
	map[x] = map[x] || [];
	if (!map[x][y]) {
		map[x][y] = 0
	}

	map[x][y]++;
}

const overlapingPoints = (map, atLeast) => {
	let count = 0;

	map.forEach((row) => {
		row.forEach((value) => {
			if (value >= atLeast) {
				count++;
			}
		})
	})

	return count;
}

const coords = toCoords(input).filter(nonDiagonal);

const createMap = (coords) => {
	const map = []

	coords.forEach((coord) => {
		const xStep = calculateStep(coord.x1, coord.x2);
		const yStep = calculateStep(coord.y1, coord.y2);

		let x = coord.x1;
		let y = coord.y1;
		const xTo = coord.x2 + xStep;
		const yTo = coord.y2 + yStep;

		while (!(x === xTo && y === yTo)) {
			addToMap(map, x, y);
			x += xStep;
			y += yStep;
		}
	});

	return map;
}

const map = createMap(coords);

console.log(overlapingPoints(map, 2));