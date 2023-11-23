import { ACTION } from ".."
import { serverAdress } from "../../constants"

export const checkAccessToken = (accessToken: string) => {
	return async (dispatch: any) => {
		dispatch({type: ACTION.START_LOADING})
		try {
			const req = await fetch(serverAdress + '/user', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({accessToken})
			})

			const res = await req.json()

			dispatch({type: ACTION.LOGIN, payload:res})
			dispatch({type: ACTION.END_LOADING})
		} catch (e) {
			console.log(e)
			dispatch({type: ACTION.END_LOADING})
		}
	}
}
