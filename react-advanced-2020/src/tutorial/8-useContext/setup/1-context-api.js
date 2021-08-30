import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)
const [state, setstate] = useState("");
console.log(React);
const PersonContext = React.createContext();
//  two components -Provider, Consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const [value,SetValue] = useState("edf");

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <PersonContext.Provider value={{ removePerson, people }}>
        <h3>Context Api</h3>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
      <Child/>
      
    </div>
  );
};
const Child=()=>{
  return(
    <>
    <Child1/>
    <h1>Hello</h1>
    </>
  )
}
const Child1=()=>{
  return(
    <h1>Hello</h1>
  )
}
export default ContextAPI;
