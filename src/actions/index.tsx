import  * as actionTypes  from "./actionTypes";
import { AlertState, UserState } from "../reducers/reduxState";

export function userLogin(user: UserState): actionTypes.Action {
  return {
    type: actionTypes.USER_LOGIN,
    payload: user
  };
}

export function throwError(error: AlertState): actionTypes.Action {
  return {
    type: actionTypes.ERROR,
    payload: error
  };
}

export function clearError(): actionTypes.Action {
  return {
    type: actionTypes.ERROR,
    payload: {message:"",type:""}
  };
}

export function selectIdea(ideaId:string): actionTypes.Action{
  return {
    type: actionTypes.IDEA_IN_REVIEW,
    payload: ideaId
  }
}
