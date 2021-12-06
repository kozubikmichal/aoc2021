import input from "./input.js";

const Days = 256;

const timeToSpawn = new Array(9).fill(0);

input.forEach((timer) => timeToSpawn[timer]++);

for (let i = 0; i < Days; i++) {
	let spawned = timeToSpawn[0];

	timeToSpawn[0] = timeToSpawn[1];
	timeToSpawn[1] = timeToSpawn[2];
	timeToSpawn[2] = timeToSpawn[3];
	timeToSpawn[3] = timeToSpawn[4];
	timeToSpawn[4] = timeToSpawn[5];
	timeToSpawn[5] = timeToSpawn[6];
	timeToSpawn[6] = timeToSpawn[7] + spawned;
	timeToSpawn[7] = timeToSpawn[8];
	timeToSpawn[8] = spawned;
}

console.log(
	timeToSpawn.reduce((sum, timer) => sum += timer, 0)
);