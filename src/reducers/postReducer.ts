import { Action, State } from "./interfaces";

export const INITIAL_STATE: State = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state: State, action: Action) : State => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        post: action.payload ? action.payload : state.post,
        loading: false,
      };
    case "FETCH_ERROR":
    return {
        ...state,
        error: true,
        loading: false,
    };
    default:
      return {...state}
  }
};

export default postReducer