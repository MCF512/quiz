import { Question } from "../types";

export const validateQuestions = (questions: Array<Question>) => {
	for (let i = 0; i < questions.length; i++) {
		if (!questions[i].question) {
			return `В вопросе №${i+1} отсутсвует текст вопроса`
		} else if (questions[i].answers.length < 2) {
			return `В вопросе должно быть как минимум 2 ответа. Ошибка в вопросе №${i+1}`
		}

		let haveCorrectAnswer = false

		for (let k = 0; k < questions[i].answers.length; k++) {
			const ans = questions[i].answers[k]

			if (!ans.text) {
				return `В вопросе №${i+1} ответ №${k+1} пустой`
			} else if (ans.correct) {
				haveCorrectAnswer = true
			}
		}

		if (!haveCorrectAnswer) {
			return `В вопросе ${i+1} отсутствует верный ответ`
		}
	}

	return ''
}
