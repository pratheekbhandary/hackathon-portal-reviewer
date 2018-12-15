import { Action, ERROR } from "../actions/actionTypes";
import {AlertState} from "./reduxState";

const alertState={message:"",type:""}

export function errorReducer(
  state: AlertState = alertState,
  action: Action
): AlertState {
  if (action.type === ERROR) {
    return action.payload;
  }
  return state;
}
