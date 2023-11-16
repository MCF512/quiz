import { ReactNode } from "react";

export interface OnlyStyledComponent {
	className? : string,
	children?: ReactNode
}

export interface Action {
	type: string,
	payload: any
}

export interface Question {
	_id: string,
	question: string,
	answers: [{
		_id: string,
		text: string,
		correct: boolean
	}]
}

export interface Result {
	timestamp: string | number,
	answers: Array<boolean|null>,
	testLength: number
}

export interface TestState {
	questions: Array<Question>,
	isTestStarted: boolean,
	userAnswers: Array<boolean|null>
}

export interface UserState {
	results: Array<Result>
}

export interface State {
	test: TestState,
	user: UserState
}
