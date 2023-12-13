import { serverAdress } from "../constants";
import { Question } from "../types";

export const editTest = async (id: string, data: Array<Question>) => {
	try {
		const req = await fetch(serverAdress + '/edit', {
			method: "POST",
			'headers': {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				id,
				data
			})
		})

		// const res = await req.json()
		alert('Успешно')
	} catch (e) {
		console.log(e)
		alert('Произошла ошибка')
	}
}
