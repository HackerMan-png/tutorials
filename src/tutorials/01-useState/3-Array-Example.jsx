import React, { useState } from "react";
import { data } from "../../data";


const Array = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className="btn">Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={ () => setPeople([]) }>Clear All</button>
      <button className="btn" onClick={ () => setPeople(data)}> Reset </button>
    </>
  );
};

export default Array;
