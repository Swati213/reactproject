import React, { useEffect } from 'react';
import { useState } from 'react';

const  UseEffect =()=>{
   const[num,  setNum]= useState(1);
   const[nums,  setNums]= useState(1);

   useEffect(()=>{
       alert("I am Clicked");
   },[num]);

   const incEvent=()=>{
       setNum(num+1);
   }
   const incEvents=()=>{
    setNums(nums+1);
}

    return (
        <>
        <button  onClick={incEvent}>Click Me 🎅😄👍💕{num} </button>
        <button  onClick={incEvents}>Click Me 🎅😄👍💕{nums} </button>

        </>
    );

};

export default UseEffect;