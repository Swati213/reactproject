import React, { useState } from "react";
import './index.css';

var d = new Date();
var n = d.toLocaleTimeString();

const DigitalClock = () => {
  const [count, setDigital] = useState(n);
  const UpdateTime=()=>{
    var d = new Date();
    var n = d.toLocaleTimeString();
    setDigital(n) ;   
  };
     setInterval(UpdateTime,1000);
  return (
    <>
      <h1>{count}</h1>
     
    </>
  );
};

export default DigitalClock;
