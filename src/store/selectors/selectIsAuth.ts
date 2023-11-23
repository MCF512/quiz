import { State } from "../../types";

export const selectIsAuth = (state: State) => state.user.isAuth
