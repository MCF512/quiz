import { ACTION } from ".."

export const getResults = () => {
	return (dispatch: any) => {
		const resultsFromStorage = localStorage.getItem('results')
		const parsedResults = resultsFromStorage ? JSON.parse(resultsFromStorage) : []

		dispatch({type: ACTION.SET_RESULTS, payload: parsedResults})
	}
}
