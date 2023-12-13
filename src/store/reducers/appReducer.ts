import { Action, AppState } from "../../types"
import { ACTION } from "../actions"

const initialTestState: AppState = {
	loading: false,
	registerError: '',
	loginError: '',
	registerSuccess: false,
	loginSuccess: false,
	editingUserError: '',
	editingUserSuccess: false,
	tests: []
}

export const appReducer = (state = initialTestState, action: Action) => {
	switch (action.type) {
		case ACTION.START_LOADING: {
			return { ...state, loading: true }
		}
		case ACTION.END_LOADING: {
			return { ...state, loading: false }
		}
		case ACTION.SET_REGISTER_ERROR: {
			return { ...state, registerError: action.payload }
		}
		case ACTION.SET_LOGIN_ERROR: {
			return { ...state, loginError: action.payload }
		}
		case ACTION.SET_REGISTER_SUCCESS: {
			return { ...state, registerSuccess: action.payload }
		}
		case ACTION.SET_LOGIN_SUCCESS: {
			return { ...state, loginSuccess: action.payload }
		}
		case ACTION.SET_EDITING_USER_ERROR: {
			return { ...state, editingUserError: action.payload }
		}
		case ACTION.SET_EDITING_USER_SUCCESS: {
			return { ...state, editingUserError: action.payload }
		}
		case ACTION.GET_ALL_TESTS: {
			return { ...state, tests: action.payload }
		}
		default:
			return state
	}
}
