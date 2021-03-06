import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call UseEffect");
    if (value > 0) {
      document.title = `New Message (${value})`;
    }
  }, [value]);
  
 useEffect(() => {
    console.log("hello world");
   changes();
  },[value]);
  console.log("render component");
  const changes=()=>{
    console.log("change")
  }

  return (
    <>
      <h2>{value}</h2>
      <input type="text"></input>
     {console.log('hello')}
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
