import {
	numbers as numbers,
	cards as cards
} from "./input.js";

import * as bingo from "./bingo.js"

const findLastWinner = (players, input) => {
	const playerWrappers = players.map((player) => ({
		player: player,
		isWinner: false,
		finalNumber: null
	}));
	const winners = [];

	for (let i = 0; i < input.length; i++) {
		let number = input[i];

		for (let p = 0; p < playerWrappers.length; p++) {
			let player = playerWrappers[p];
			if (player.isWinner) {
				continue;
			}

			player.isWinner = bingo.markNumber(player.player, number);
			player.finalNumber = number;

			if (player.isWinner) {
				winners.push(player)
			}
		}
	}

	const lastWinner = winners[winners.length - 1];

	return {
		player: lastWinner.player,
		finalNumber: lastWinner.finalNumber
	}
}

const boards = cards.map(bingo.createBoard);
const winnerData = findLastWinner(boards, numbers);

console.log(
	bingo.sumUnmarked(winnerData.player) * winnerData.finalNumber
)