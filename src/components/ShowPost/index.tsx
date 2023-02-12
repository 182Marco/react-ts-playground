import logo from "./../../logo.svg";
import "./index.scss";
import { useEffect, useReducer } from "react";
import postReducer, { INITIAL_STATE } from "../../reducers/postReducer";
import { actionTypesEnum as actions } from "../../reducers/actionTypes";

export const ShowPost = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = async (path: string) => {
    dispatch({ type: actions.FETCH_START });
    try {
      const r = await fetch(path);
      const d = await r.json();
      dispatch({ type: actions.FETCH_SUCCESS, payload: d });
    } catch (er) {
      dispatch({
        type: actions.FETCH_ERROR,
        payload: { exist: true, errorType: er as string },
      });
    }
  };

  useEffect(() => {
    handleFetch(`${process.env.REACT_APP_API}/posts/1`);
  }, []);

  return (
    <div className="show-post">
      <h3>{state.post.title}</h3>
      <p>{state.post.body}</p>
      {state.loading && (
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>...Post is loading</p>
        </section>
      )}
      {state.error.exist && (
        <p>Error in the fetch request: {state.error.errorType}</p>
      )}
    </div>
  );
};

export default ShowPost;
