export const countCorrectAnswers = (answers: Array<boolean|null>) => {
	let count = 0;
	for (let val of answers) {
		if (val) count++
	}
	return count
}
