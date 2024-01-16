import { serverAdress } from "../../constants"
import { ACTION } from "../actions";

export const getTest = (id: string) => {
	return async (dispatch: any) => {
		dispatch({type: ACTION.START_LOADING})
		try {
			const request = await fetch(serverAdress + '/quiz', {
				method: 'POST',
				'headers': {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					id
				})
			});

			const test = await request.json();

			dispatch({ type: ACTION.GET_TEST, payload: test })
			dispatch({type: ACTION.END_LOADING})
		} catch (err) {
			console.log(err)
		}

	}
}
