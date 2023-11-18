import { serverAdress } from "../../constants"
import { ACTION } from "../actions";

export const getTest = () => {
	return async (dispatch: any) => {
		try{
			const request = await fetch(serverAdress + '/quiz');

			const test = await request.json();

			dispatch({type: ACTION.GET_TEST, payload: test[0].questions})
			dispatch({type: ACTION.SET_TEST_ID, payload: test[0]._id})
		} catch (err) {
			console.log(err)
		}

	}
}
