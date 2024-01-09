import { serverAdress } from "../constants";
import { Question } from "../types";

export const createTest = async (questions: Array<Question>, testName: string, author: string, authorEmail: string) => {
  try {
    const req = await fetch(serverAdress + '/test/create', {
      method: "POST",
      'headers': {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        questions,
        name: testName,
        author,
        email: authorEmail,
        timestamp: Date.now(),
        testName
      })
    })
    alert('Успешно')
  } catch (e) {
    console.log(e)
    alert('Произошла ошибка')
  }
}
