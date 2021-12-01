export const countIncreased = (data) => {
	let result = 0;

	for (let i = 1; i < data.length; ++i) {
		if (data[i] > data[i - 1]) {
			result++;
		}
	}

	return result;
}

export const sum = (...args) => args.reduce((result, value) => result + value, 0)