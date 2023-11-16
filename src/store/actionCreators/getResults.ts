import { ACTION } from ".."

export const getResults = () => {
	return (dispatch: any) => {
		const resultsFromStorage = localStorage.getItem('results')
		const parsedResults = resultsFromStorage ? JSON.parse(resultsFromStorage) : []

		dispatch({type: ACTION.GET_RESULTS, payload: parsedResults})
	}
}
