import { IDEA_IN_REVIEW} from "../actions/actionTypes";
import { AnyAction } from "redux";

export function ideaInReview(
  state: string = "",
  action: AnyAction
): string {
  if (action.type === IDEA_IN_REVIEW) {
    return action.payload;
  }
  return state;
}
