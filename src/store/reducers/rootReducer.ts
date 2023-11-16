import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
	test: testReducer,
	user: userReducer
})
