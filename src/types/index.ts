import { ReactNode } from "react";

export interface OnlyStyledComponent {
	className?: string,
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

export interface Test {
	_id: string,
	questions: Array<Question>,
	author: string,
	testName: string,
	timestamp: string,
	email: string,
	_v: number
}

export interface Result {
	timestamp: string | number,
	answers: Array<boolean | null>,
	testLength: number,
	user: string
}

export interface TestState {
	testName: string,
	questions: Array<Question>,
	_id: string,
	author: string,
	timestamp: string,
	isTestStarted: boolean,
	userAnswers: Array<boolean | null>,
	results: Array<Result>
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
	loginSuccess: boolean,
	editingUserError: string,
	editingUserSuccess: boolean,
	tests: Array<Test>
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
