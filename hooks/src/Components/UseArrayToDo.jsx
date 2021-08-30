import React from 'react'
import { useState } from "react";
import "./UseArrayToDo.css";

const UseArrayToDo = () => {
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
  const removeElem=(id)=>{
     const myNewArray=clear.filter((curEle)=>{
         return(curEle.id!==id);
     })
     setClear(myNewArray);
  }
  return (
    <div>
      {clear.map((curElm) => {
        return (
          <h1 className="h1style" key={curElm.id}>
            Name:{curElm.myName} & Age:{curElm.age}
            
            <button className="btninner" onClick={()=>removeElem(curElm.id)}>Remove</button>
          </h1>
        );
      })}
      <button className="btn" onClick={clearEvent}>
        Clear
      </button>
    </div>
 
        
    )
}

export default UseArrayToDo
