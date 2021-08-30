import React, { useState } from "react";
import "./Reg.css";
const Registration = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [newEntry, setNewEntry] = useState([]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setRegister({ ...register, [name]: value }); //[name] means that we adding data dynamicaly
  };
  const submitForm = (event) => {
    event.preventDefault();
   
    const newData = { ...register, id: new Date().getTime().toString() };
    setNewEntry([...newEntry, newData]);
    setRegister({username:"", email:"", phone:"", password:""});
  
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="username">FullName</label>
          <input
            type="text"
            autoComplete="off"
            value={register.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            autoComplete="off"
            value={register.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="phone"
            autoComplete="off"
            value={register.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            autoComplete="off"
            value={register.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Registration</button>
      </form>
      <div>
          {
              newEntry.map((curEle)=>{
                  const{id,username,email,phone,password}=curEle;
                 return(
                     <div className="show" key={id} >
                         <p>{username}</p>
                         <p>{email}</p>
                         <p>{phone}</p>
                         <p>{password}</p>

                     </div>
                 );
              })
          }
      </div>
    </>
  );
};

export default Registration;
