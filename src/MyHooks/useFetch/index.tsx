import { useState, useEffect } from "react";
import { Verbs } from "../../models/mainModels";
import FetchingObj from "./types";

export const useFetch = (
  url: string,
  method: Verbs = Verbs.GET,
  content?: any
): FetchingObj => {

  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const r = await fetch(url, reqObj);
      const d = await r.json();
      setLoading(false);
      setData(d);
    } catch (er) {
      setLoading(false);
      setError(er as string);
    }
  };

  useEffect(() => {
    call();
  }, []);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
