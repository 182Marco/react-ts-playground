export interface Post {
  title: string;
  body: string;
}

export interface ErrorType {
  exist: boolean;
  errorType: string;
}

export interface State {
  loading: boolean;
  post: Post;
  error: ErrorType;
}

export interface Start {
  type: "FETCH_START",
}

export interface Success {
  type: "FETCH_SUCCESS",
  payload: Post
}

export interface Error {
  type: "FETCH_ERROR",
  payload: ErrorType
}

export type Action = Start | Success | Error