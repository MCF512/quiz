import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { userReducer } from "./userReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	test: testReducer,
	user: userReducer
})
