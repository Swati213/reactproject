import React from "react";
import { useState } from "react";
import "./UseArray.css";
const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Aksay Kumar",
      age: 26,
    },
    {
      id: 1,
      myName: "Abhik Kumar",
      age: 27,
    },
    {
      id: 3,
      myName: "Pratik Kumar",
      age: 29,
    },
  ];
  const [clear, setClear] = useState(bioData);

  const clearEvent = () => {
    setClear([]);
  };
  return (
    <div>
      {clear.map((curElm) => {
        return (
          <h1 className="h1style" key={curElm.id}>
            Name:{curElm.myName} & Age:{curElm.age}
          </h1>
        );
      })}
      <button className="btn" onClick={clearEvent}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
