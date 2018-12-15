import { combineReducers } from "redux";
import { userReducer as user } from "./userLogin";
//import { ReduxState } from "./reduxState";
import { errorReducer as error } from "./errorReducer";
import {ideaInReview} from './ideaInReviewReducer';
//TODO:<ReduxState> does not work
export default combineReducers<any>({
  user,
  error,
  ideaInReview
});
