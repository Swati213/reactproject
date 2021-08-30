import React, { useState } from "react";

import './index.css';


const Increment = () =>{
const state=useState();
const [count,setCount]=useState(0);


    const IncNum = () =>{
    console.log(state);
      setCount(count + 1);
     // console.log("clicked" + count++);
      
    };
  

 return(
    <>
    <h1 style={{fontweight:'bold'}}>{count}</h1>
    <button onClick={IncNum}>Click me</button>
    </>
 )
};

export default Increment;