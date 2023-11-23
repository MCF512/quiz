import { ACTION } from ".."
import { serverAdress } from "../../constants"
import { UserInfo } from "../../types"

export const loginUser = (data: UserInfo) => {
	return async (dispatch: any) => {
		dispatch({type: ACTION.START_LOADING})
		try {
			const user = await fetch(serverAdress+'/login', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})

			const res = await user.json()
			if (user.status === 302) {
				dispatch({type: ACTION.SET_LOGIN_ERROR, payload: res})
			} else {
				dispatch({type: ACTION.SET_LOGIN_SUCCESS, payload: true})
				dispatch({type: ACTION.LOGIN, payload: res})
				localStorage.setItem('token', res.accessToken)
			}
			dispatch({type: ACTION.END_LOADING})
		} catch (e) {
			console.log(e)
			dispatch({type: ACTION.END_LOADING})
		}
	}
}
