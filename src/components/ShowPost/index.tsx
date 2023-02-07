import { useEffect, useReducer } from "react";
import postReducer, { INITIAL_STATE } from "../../reducers/postReducer";

export const ShowPost = () => {
  
  
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({type: "FETCH_START"})
    fetch("http://jsonplaceholder.typicode.com/posts/1")
      .then(r => r.json())
      .then(d => dispatch({type: 'FETCH_SUCCESS', payload: d}))
      .catch(er => dispatch({type: 'FETCH_ERROR'}));
  };

  console.log(state)

  useEffect(() => handleFetch, [])

  return <div className="show-post"></div>;
};

export default ShowPost;
