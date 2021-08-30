import React, {  useEffect, useState } from 'react'
import "./UseEffect1.css";

const UseEffect2 = () => {
    const[data ,setData]=useState(window.screen.width);
    const actualWidth=()=>{
        console.log(window.innerWidth);

        setData(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);
        //Cleanup Function
        return()=>{
            window.removeEventListener("resize",actualWidth)
        }
    })

    return (
        <div>
          <p>TheActual Size of Window is:</p> 
          <h1>{data}</h1> 
        </div>
    )
}

export default UseEffect2
