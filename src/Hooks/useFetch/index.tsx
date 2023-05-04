import { useState, useEffect } from "react";
import { Verbs } from "../../models/mainModels";
import FetchingObj from "./types";

export const useFetch = (
  url: string,
  method: Verbs = Verbs.GET,
  content?: Object
): FetchingObj => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const reqObj = {
    method: method,
    body: content ? JSON.stringify(content) : null,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const call = async () => {
    setisLoading(true);
    try {
      const r = await fetch(url, reqObj);
      const d = await r.json();
      setisLoading(false);
      setData(d);
    } catch (er) {
      setisLoading(false);
      setError(er as string);
    }
  };

  useEffect(() => {
    call();
  }, []);

  return {
    isErrror: !!error,
    isLoading,
    error,
    data,
  };
};

export default useFetch;
