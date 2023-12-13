import { serverAdress } from "../constants";

export const deleteTest = async (id: string) => {
  try {
    const req = await fetch(serverAdress + '/test/delete', {
      method: "POST",
      'headers': {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
    alert('Успешно')
  } catch (e) {
    console.log(e)
    alert('Произошла ошибка')
  }
}
