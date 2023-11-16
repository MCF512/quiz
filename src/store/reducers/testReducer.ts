import { Action, TestState } from "../../types"
import { ACTION } from "../actions"

const initialTestState: TestState = {
	questions: [],
	isTestStarted: false,
	userAnswers: []
}

export const testReducer = (state = initialTestState, action: Action) => {
	switch (action.type) {
		case ACTION.START_TEST: {
			return {...state, questions: [...action.payload], isTestStarted: true}
		}
		case ACTION.RESET_USER_ANSWERS: {
			state.userAnswers.fill(null)
			return {...state, isTestStarted: false}
		}
		case ACTION.SET_TEST_LENGTH: {
			state.userAnswers.length = action.payload
			return state
		}
		case ACTION.SET_USER_ANSWER: {
			const {index, isCorrect} = action.payload
			state.userAnswers[index] = isCorrect
			return state
		}
		default:
			return state
	}
}
