import React, { useEffect } from "react";
import { useState } from "react";

const Pg1 =()=>{
  const[num,setNum] = useState(1);
  const incEvent=()=>{
      setNum(num+1);
  }
  useEffect(()=>{
      return document.title=`you clicked me ${num} times`;
  })
  return(
      <button className="btn btn-success" onClick={incEvent}>Click Me 🎅😄👍💕{num}</button>
  );

}
export default Pg1;