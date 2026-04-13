import { useState } from "react";

const useFetch = (url, config = undefined) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchData = async (callback) => {
    try {
      const res = await fetch(url, config);
      if (!res.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const data = await res.json();
      typeof callback === "function" && callback(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  return [isLoading, isError, fetchData];
};

export default useFetch;
