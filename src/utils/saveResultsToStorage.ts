import { Result } from "../types"

export const saveResultsToStorage = (result: Result) => {
	const resultsFromStorage = localStorage.getItem('results')
	const parsedResults = resultsFromStorage ? JSON.parse(resultsFromStorage) : []

	parsedResults.push(result)

	localStorage.setItem('results', JSON.stringify(parsedResults))
}
