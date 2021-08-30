import React, { useState } from "react";
import "./LoginForm.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    if(email && password){
        //if key and id is same noneed to write like email:email
    const newEntry = { id: new Date().getTime().toString(), email, password };
    setAllEntry([...allEntry, newEntry]);
    setEmail("");
    setPassword("");

    }else{
        alert("Please,fill all the Data");
    }
    
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">PassWord</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <dir>
        {allEntry.map((curEle) => {
            //object destructing
            const{id,email,password}=curEle
          return (
            <div className="show" key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </dir>
    </div>
  );
};

export default LoginForm;
