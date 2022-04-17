import axios from "axios";
import { useState, useEffect } from "react";

export const UseGetAxios = (api, token) => {
  const [isLoading, setIsLoading] = useState(true);
  const [serverData, setServerData] = useState({});
  const [serverError, setServerError] = useState(null);
  const encodedToken = localStorage.getItem("token");
  const postHeader = { headers: { authorization: encodedToken } };

  const getData = async () => {
    try {
      setIsLoading(true);
      if (token) {
        let { data } = await axios.get(api, postHeader);
        setServerData(data);
      } else {
        let { data } = await axios.get(api);
        setServerData(data);
      }
    } catch (err) {
      setServerError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [api]);
  return {
    isLoading,
    serverData,
    serverError,
  };
};
