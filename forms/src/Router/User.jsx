import { Button } from "bootstrap";
import React from "react";

import { useHistory, useLocation, useParams } from "react-router-dom";

const User = () => {
  const { name, lname } = useParams();
  const Location = useLocation();
  const History=useHistory();
  return (
    <>
      <h1>
        User {name} {lname} Page
      </h1>
      <p> My current location is {Location.pathname}</p>
      {Location.pathname === `/User/swati/sinha` ?
     (<button onClick={()=>{
         History.goBack()
     }}>Go Back</button>):null
      }
    </>
  );
};

export default User;
