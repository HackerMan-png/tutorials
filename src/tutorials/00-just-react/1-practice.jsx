import React from "react";

// Reserved space for variables
const text = "Press Here";
const isShowing = false;

const Practice = () => {
  // Reserved for states and functions
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  // Return statement is for your HTML elements
  return (
    <div>
      <h3>{isShowing ? "Rendered" : "Not Rendered"}</h3>
      <h2>{isShowing && "It is showing"}</h2>

      <form>
        <button onClick={submit} type="submit" className="btn">
          Submit
        </button>
      </form>
      <button onClick={handleClick} className="btn">
        {text}
      </button>
    </div>
  );
};

// default export of the function name
export default Practice;
