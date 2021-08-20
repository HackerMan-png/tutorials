import React, { useState, useEffect } from "react";

const Basics = () => {
  const [value, setValue] = useState(0);
  console.log("re-render happened");

  useEffect(() => {
    console.log("useEffect happened");
  }, [value])
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me!
      </button>
    </>
  );
};

export default Basics;
