import { State, Test } from "../../types";

export const selectUserTests = (state: State) => {
  return state.app.tests.filter((test: Test) => {
    return test.email === state.user.email
  })
}