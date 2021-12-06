import {
	numbers as numbers,
	cards as cards
} from "./input.js";

import * as bingo from "./bingo.js"


const findFirstWinner = (players, input) => {
	for (let i = 0; i < input.length; i++) {
		let number = input[i];

		for (let p = 0; p < players.length; p++) {
			let isWinner = bingo.markNumber(players[p], number);
			if (isWinner) {
				return {
					player: players[p],
					finalNumber: number
				}
			}
		}
	}
}

const boards = cards.map(bingo.createBoard);
const winnerData = findFirstWinner(boards, numbers);

console.log(
	bingo.sumUnmarked(winnerData.player) * winnerData.finalNumber
);