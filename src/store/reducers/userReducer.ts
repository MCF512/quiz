import { Action, UserState } from "../../types"
import { ACTION } from "../actions"

const initialTestState: UserState = {
	results: [],
	isAuth: false,
	email: '',
	name: '',
	surname: ''
}

export const userReducer = (state = initialTestState, action: Action) => {
	switch (action.type) {
		case ACTION.GET_RESULTS: {
			return {...state, results: action.payload}
		}
		case ACTION.LOGIN: {
			return {...state, ...action.payload, isAuth: true}
		}
		default:
			return state
	}
}
