import { Action, UserState } from "../../types"
import { ACTION } from "../actions"

const initialTestState: UserState = {
	results: []
}

export const userReducer = (state = initialTestState, action: Action) => {
	switch (action.type) {
		case ACTION.GET_RESULTS: {
			return {...state, results: action.payload}
		}
		default:
			return state
	}
}
