import { USER_LOGIN } from "../actions/actionTypes";
import { UserState } from "./reduxState";
import { AnyAction } from "redux";

export const userState: UserState = { name: "", email: "" };

export function userReducer(
  state: UserState = userState,
  action: AnyAction
): UserState {
  if (action.type === USER_LOGIN) {
    return Object.assign({}, state, action.payload);
  }
  return state;
}