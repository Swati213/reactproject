import React, { useState } from "react";
import './index.css';
const MultipeInput = () => {
  const [fullName, setFullName] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    phone:" ",
    qua:"",
  });

  const inputEvent = (props) => {
    console.log(props.target.value);
    console.log(props.target.name);
    //const value = props.target.value;
   // const name = props.target.name;
    const{name,value}=props.target;
    setFullName((preValue) => {
      return{
        ...preValue,
       [name]:value,
      };

     // if (name === "fName") {
     //   return {
      //    fname: value,
      //    lname: preValue.lname,
       //   email:preValue.email,
        //  phone:preValue.phone,

       // };
    //  } else if (name === "lName") {
      //  return {
       //    fname: preValue.fname,
       //   lname: value,
        //  email:preValue.email,
       //   phone:preValue.phone,

      //  };
     // }else if (name === "email") {
       // return {
       //   fname: preValue.fname,
       //   lname: preValue.lname,
       //   email:value,
       //   phone:preValue.phone,

      //  };
     // }else if (name === "phone") {
       // return {
       //   fname: preValue.fname,
        //  lname: preValue.lname,
       //   nemail:preValue.email,
        //  phone:value,

        //};
     // }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Sumitted");
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
           </h1>
            
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qua}</p>
            <br/>
            <input
              type="text"
              placeholder="Enter Your qualification"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter Your qualification"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />

            <input 
            type="email"
             placeholder="Enter  Your Email"
             name="email"
             onChange={inputEvent}
              value={fullName.email}
              />
            <input 
            type="number"
             placeholder="Enter  Your Phoneno"
             name="phone"
             onChange={inputEvent}
            value={fullName.phone}
              />
              <input
              type="text"
              placeholder="Enter Your qualification"
              name="qua"
              onChange={inputEvent}
              value={fullName.qua}
            />


            <button type="submit">Submit 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default MultipeInput;
