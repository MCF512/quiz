import { serverAdress } from "../../constants"
import { ACTION } from "../actions";

export const saveResult = (id: string, answers: Array<boolean | null>, testLength: number, timestamp: number, user: string) => {
  return async (dispatch: any) => {
    try {
      const request = await fetch(serverAdress + '/test/result', {
        method: 'POST',
        'headers': {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id,
          answers,
          testLength,
          timestamp,
          user
        })
      });

      const test = await request.json();

      dispatch({ type: ACTION.SET_RESULTS, payload: test.results })
    } catch (err) {
      console.log(err)
    }

  }
}
