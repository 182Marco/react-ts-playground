export interface State {
  loading: boolean;
  post: {};
  error: boolean;
}

export interface Action {
  type: "FETCH_START" | "FETCH_SUCCESS" | "FETCH_ERROR";
  payload?: {};
}
