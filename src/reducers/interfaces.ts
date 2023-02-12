export interface Post {
  title: string;
  body: string;
}

export interface Error {
  exist: boolean;
  errorType: string;
}

export interface State {
  loading: boolean;
  post: Post;
  error: Error;
}

export interface Action {
  type: "FETCH_START" | "FETCH_SUCCESS" | "FETCH_ERROR";
  payload?: Partial<Post> & Partial<Error>
}


