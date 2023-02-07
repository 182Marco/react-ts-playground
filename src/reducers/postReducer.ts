import { Action, State } from "./interfaces";

export const INITIAL_STATE: State = {
  loading: false,
  post: { title: "", body: "" },
  error: {
    exist: false,
    errorType: ''
  }
};

export const postReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        post: {
          title:  action.payload?.title? action.payload?.title : '',
          body: action.payload?.body? action.payload?.body : '',
        },
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: {
          exist: true,
          errorType: action.payload?.errorType ? action.payload?.errorType : ''
        },
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
