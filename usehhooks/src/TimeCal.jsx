import React, { useState } from"react";
import "./index.css";


var d = new Date();
var n = d.toLocaleTimeString();


const TimeCal =() =>{
    const [count,setRndomTime]=useState(n);
    const RandomTime=()=>{
        var d = new Date();
        var n = d.toLocaleTimeString();

        setRndomTime(n);
    }
    return(
        <>
         <div>
             <h1>{count}</h1>
             <button onClick={RandomTime}>Click Me</button>
         </div>

        </>
    );

};

export default TimeCal;