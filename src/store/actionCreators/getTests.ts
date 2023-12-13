import { ACTION } from ".."
import { serverAdress } from "../../constants"

export const getTests = () => {
  return async (dispatch: any) => {
    dispatch({ type: ACTION.START_LOADING })
    try {
      const req = await fetch(serverAdress + '/tests/get')
      const res = await req.json()

      dispatch({ type: ACTION.GET_ALL_TESTS, payload: res })
      dispatch({ type: ACTION.END_LOADING })
    } catch (e) {
      console.log(e)
    }
  }
}