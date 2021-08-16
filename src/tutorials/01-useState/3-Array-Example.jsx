import React, { useState } from "react";
import { data } from "../../data";

const Array = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn">Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Array;
