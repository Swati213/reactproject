import React, { useEffect, useState } from "react";
import "./UseEffect1.css";
export const UseEffects1 = () => {
  const [count, setcount] = useState(0);
  const CountHandle = () => {
    setcount(count + 1);
  };
  //we can use Multiple UseEffect
  useEffect(() => {
    console.log("I am good");

    if (count >= 1) {
      document.title = `charts(${count})`;
    } else {
      document.title = `charts`;
    }
  }, [count]); //useEffect [count]->dependencyList
  useEffect(() => {
      console.log("I am fine");
      }, [count]); //useEffect [count]->dependencyList

  console.log("Hello Outside");

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={CountHandle}>
        Click 🛩️
      </button>
    </div>
  );
};

export default UseEffects1;
