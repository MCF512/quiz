import { ACTION } from "..";
import { Question } from "../../types"

export const deleteQuestion = (questions: Array<Question>, index: number) => {
	return async (dispatch: any) => {
		const changedQuestions = questions;
		changedQuestions.splice(index, 1);

		dispatch({type: ACTION.DELETE_QUESTION, payload: changedQuestions})
	}
}
