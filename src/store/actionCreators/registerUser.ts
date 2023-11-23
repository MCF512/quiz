import { ACTION } from ".."
import { serverAdress } from "../../constants"
import { UserInfo } from "../../types"

export const registerUser = (data: UserInfo) => {
	return async (dispatch: any) => {
		dispatch({type: ACTION.START_LOADING})
		try {
			const user = await fetch(serverAdress+'/register', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})

			const res = await user.json()
			if (user.status === 302) {
				dispatch({type: ACTION.SET_REGISTER_ERROR, payload: res})
			} else {
				dispatch({type: ACTION.SET_REGISTER_SUCCESS, payload: true})
			}
			dispatch({type: ACTION.END_LOADING})
		} catch (e) {
			console.log(e)
			dispatch({type: ACTION.END_LOADING})
		}
	}
}
