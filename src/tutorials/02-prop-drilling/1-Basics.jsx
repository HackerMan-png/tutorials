import React, { useState } from "react";
import { data } from "../../data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List removePerson={removePerson} people={people} />
    </section>
  );
};

export const List = ({people, removePerson}) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </div>
  );
};

export const SinglePerson = ({id, name, removePerson}) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
