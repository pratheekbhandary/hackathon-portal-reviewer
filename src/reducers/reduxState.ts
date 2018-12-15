export interface ReduxState {
  user: UserState;
  alert: AlertState;
  ideaInReview: string;
}

export interface UserState {
  name: string;
  email: string;
}

export interface AlertState {
  message: string;
  type: string;
}

