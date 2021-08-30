import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const [value,SetValue] = useState("edf");
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <section>
        <h3>prop drilling</h3>
        <List people={people} removePerson={removePerson} value={value}  />
      </section>
    </>
  );
};
const List = ({ people, removePerson,value}) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
            value={value}
            
          ><h1>Child props</h1></SinglePerson>
        );
      })}
    </>
  );
};
const SinglePerson = ({ id, name, removePerson,children,value}) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      {children}
      <h3>{value}</h3>
      <button onClick={() => removePerson(id)}>Delete</button>
      <Child value={value} />
    </div>
  );
};
const Child=({value})=>{
  return(
    <>
    <h1>Hello</h1>
   <h1>{value}</h1>
   </>
  )
}
export default PropDrilling;
