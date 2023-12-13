import { serverAdress } from "../../constants"
import { ACTION } from "../actions";

export const getTest = (id: string) => {
	return async (dispatch: any) => {
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
		} catch (err) {
			console.log(err)
		}

	}
}
