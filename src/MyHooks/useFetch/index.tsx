import { useState, useEffect } from "react";
import FetchingObj from "./types";

export const useFetch = (url: string): FetchingObj => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const call = async () => {
    setLoading(true);
    try {
      const r = await fetch(url);
      const d = await r.json();
      setLoading(false);
      setData(d);
    } catch (er) {
      setLoading(false);
      setError(er as string);
    } finally {
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
