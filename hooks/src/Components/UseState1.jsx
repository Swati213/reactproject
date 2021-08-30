import React,{ useState} from 'react'
import "./UseState1.css";
const UseState1 = () => {
    const [myName, setMyName] = useState("Swati Sinha")
    
    const changeName=()=>{
        let val=myName;
        if(val==="Swati Sinha"){
     setMyName("Shreya Sinha");
        }else{
            setMyName("Swati Sinha");
        }
    };
    return (
        
        <div>
           <h1>{myName}</h1> 
           <button className="btn" onClick={changeName}>Click me plz</button>
        </div>
    )
}

export default UseState1;
