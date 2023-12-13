import { State } from "../../types";

export const selectUserNameAndSurname = (state: State) => `${state.user.name} ${state.user.surname}`