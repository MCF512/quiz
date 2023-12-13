import { ACTION } from ".."
import { serverAdress } from "../../constants"

export const editUser = (email: string, name: string, surname: string) => {
	return async (dispatch: any) => {
		dispatch({ type: ACTION.START_LOADING })
		const accessToken = localStorage.getItem('token')
		try {
			const user = await fetch(serverAdress + '/user/edit', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					accessToken,
					email,
					name,
					surname
				})
			})
			//editing
			const res = await user.json()
			console.log(res)
			if (user.status === 302) {
				dispatch({ type: ACTION.SET_EDITING_USER_ERROR, payload: res })
			} else {
				dispatch({ type: ACTION.SET_EDITING_USER_SUCCESS, payload: true })
				dispatch({ type: ACTION.SET_EDITING_USER_ERROR, payload: '' })
			}
			dispatch({ type: ACTION.END_LOADING })
		} catch (e) {
			console.log(e)
			dispatch({ type: ACTION.END_LOADING })
		}
	}
}
