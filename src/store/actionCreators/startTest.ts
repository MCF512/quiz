import { serverAdress } from "../../constants"
import { ACTION } from "../actions";

export const startTest = (id: string) => {
	return async (dispatch: any) => {
		try {
			const request = await fetch(serverAdress + '/quiz/' + id);

			const test = await request.json();
			dispatch({ type: ACTION.START_TEST, payload: test[0].questions })
			dispatch({ type: ACTION.SET_TEST_LENGTH, payload: test[0].questions.length })

		} catch (err) {
			console.log(err)
		}

	}
}
