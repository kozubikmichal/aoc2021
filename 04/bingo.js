export const createBoard = (card) => {
	const fields = card.map((row, index) => {
		return row.map((number) => ({
			number: number,
			hit: false
		}))
	});

	return {
		fields: fields,
		rowUnmarked: Array(fields.length).fill(fields.length),
		colUnmarked: Array(fields[0].length).fill(fields[0].length)
	};
}

export const markNumber = (board, number) => {
	board.fields.forEach((row, rowIndex) => {
		row.forEach((field, colIndex) => {
			let isHit = field.number === number;

			if (isHit) {
				field.hit = true;
				board.rowUnmarked[rowIndex]--;
				board.colUnmarked[colIndex]--;
			}
		})
	});

	return checkBoard(board);
}

export const checkBoard = (board) => {
	return board
		.rowUnmarked
		.concat(board.colUnmarked)
		.indexOf(0) > -1
}

export const sumUnmarked = (board) => {
	return board.fields.reduce((sum, row) => {
		return row.reduce(
			(rowSum, field) => rowSum + (field.hit ? 0 : field.number),
			sum)
	}, 0);
}