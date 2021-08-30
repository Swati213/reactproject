import React, { useState } from "react";
import "./UseArray.css";
const UseStateObject = () => {
  const [myData, setMyData] = useState({
    myName: "Swati Sinha",
    myAge: "26",
    myDegree: "MCA",
  });

  const changeObject = () => {
    setMyData({...myData,myAge: "27" });
  };
  return (
    <div>
      <h1 className="h1style">
        Name:{myData.myName} & Age:{myData.myAge} & Degree:{myData.myDegree}
      </h1>
      <button className="btn" onClick={changeObject}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;
