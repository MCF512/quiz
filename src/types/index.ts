import { ReactNode } from "react";

export interface OnlyStyledComponent {
	className? : string,
	children?: ReactNode
}

export interface Action {
	type: string,
	payload: any
}

export interface Answer {
	_id?: string,
	text: string,
	correct: boolean
}

export interface Question {
	_id?: string,
	question: string,
	answers: Array<Answer>
}

export interface Result {
	timestamp: string | number,
	answers: Array<boolean|null>,
	testLength: number
}

export interface TestState {
	questions: Array<Question>,
	id: string,
	isTestStarted: boolean,
	userAnswers: Array<boolean|null>
}

export interface UserState {
	results: Array<Result>,
	isAuth: boolean,
	email: string,
	name: string,
	surname: string
}

export interface AppState {
	loading: boolean,
	registerError?: string,
	loginError?: string,
	registerSuccess: boolean,
	loginSuccess: boolean
}

export interface State {
	app: AppState
	test: TestState,
	user: UserState
}

export interface UserInfo {
	name?: string,
	surname?: string,
	email: string,
	password: string
}
