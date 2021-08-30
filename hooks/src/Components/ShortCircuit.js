import React, { useState } from 'react'
import "./UseArray.css";
const ShortCircuit = () => {
    const[demo,setDemo]=useState("");
    return (
        <div>
           <h1 className="h1style">{demo ||
           <>
           <h1>Mast</h1>
           <p>We can do Anything</p>
           </>
           }</h1> 
           <h1 className="h1style">{demo && "sinha "}</h1>
        </div>
    )
}

export default ShortCircuit
