import React, { useState, useEffect } from "react";

const MultiReturn = () => {
  const url = "https://api.github.com/users/QuincyLarson";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => {
  //       if (resp.status >= 200 && resp.status <= 299) {
  //         return resp.json;
  //       } else {
  //         setIsLoading(false);
  //         setIsError(true);
  //         throw new Error(resp.statusText);
  //       }
  //     })
  //     .then((user) => {
  //       const { login } = user;
  //       setUser(login);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setUser(data.login);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
        <div className="spinner"></div>
      </div>
    )
  }
  if (isError) {
    <div className="container">
      <h1>Error, Check the console</h1>

    </div>
  }
  return(
    <div className="container">
      <h1>{user}</h1>
    </div>
  )
};

export default MultiReturn;
