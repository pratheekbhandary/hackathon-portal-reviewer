import { Action, IDEA_IN_REVIEW} from "../actions/actionTypes";

export function ideaInReview(
  state: string = "",
  action: Action
): string {
  if (action.type === IDEA_IN_REVIEW) {
    return action.payload;
  }
  return state;
}
