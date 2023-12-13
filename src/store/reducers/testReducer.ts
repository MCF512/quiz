import { Action, TestState } from "../../types"
import { ACTION } from "../actions"

const initialTestState: TestState = {
	testName: '',
	questions: [],
	_id: '',
	author: '',
	timestamp: '',
	isTestStarted: false,
	results: [],
	userAnswers: []
}

export const testReducer = (state = initialTestState, action: Action) => {
	switch (action.type) {
		case ACTION.GET_TEST: {
			return { ...state, ...action.payload }
		}
		case ACTION.SET_RESULTS: {
			return { ...state, results: [...action.payload] }
		}
		case ACTION.SET_TEST_ID: {
			return { ...state, id: action.payload }
		}
		case ACTION.START_TEST: {
			return { ...state, questions: [...action.payload], isTestStarted: true }
		}
		case ACTION.RESET_USER_ANSWERS: {
			state.userAnswers.fill(null)
			return { ...state, isTestStarted: false }
		}
		case ACTION.SET_TEST_LENGTH: {
			state.userAnswers.length = action.payload
			return state
		}
		case ACTION.SET_USER_ANSWER: {
			const { index, isCorrect } = action.payload
			state.userAnswers[index] = isCorrect
			return state
		}
		case ACTION.EDIT_QUESTION: {
			const { index, editedQuestion } = action.payload
			state.questions[index] = editedQuestion
			return state
		}
		case ACTION.ADD_QUESTION: {
			state.questions.push({
				question: '',
				answers: []
			})
			return state
		}
		case ACTION.DELETE_QUESTION: {
			return { ...state, questions: [...action.payload] }
		}
		case ACTION.SET_TEST_NAME: {
			return { ...state, testName: action.payload }
		}
		case ACTION.SET_DEFAULT_TEST_STATE: {
			return { ...initialTestState, questions: [] }
		}
		default:
			return state
	}
}
