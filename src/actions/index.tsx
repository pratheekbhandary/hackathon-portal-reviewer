import  * as actionTypes  from "./actionTypes";
import { AlertState, UserState } from "../reducers/reduxState";
import { AnyAction } from "redux";

export function userLogin(user: UserState): AnyAction{
  return {
    type: actionTypes.USER_LOGIN,
    payload: user
  };
}

export function throwError(error: AlertState): AnyAction{
  return {
    type: actionTypes.ERROR,
    payload: error
  };
}

export function clearError(): AnyAction{
  return {
    type: actionTypes.ERROR,
    payload: {message:"",type:""}
  };
}

export function selectIdea(ideaId:string): AnyAction{
  return {
    type: actionTypes.IDEA_IN_REVIEW,
    payload: ideaId
  }
}
