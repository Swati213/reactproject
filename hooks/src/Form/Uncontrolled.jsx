import React, {useState, useRef,  } from 'react'
import "./Uncontrol.css";
const Uncontrolled = () => {
    //like a use STate used with controlled form,no rerender and its preserve the value
    const luckyName = useRef(null);
    const[show,setShow]=useState(false);
    const submitForm=(event)=>{
        event.preventDefault();
       // console.log(luckyName.current.value);
        const name=luckyName.current.value;
        name === "" ? alert("plz fill the data"):setShow(true);
    }
    return (
        <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="luckyName">Enter Your Lucky Number </label>
                <input type="text"  id="luckyName" ref={luckyName}/>
            </div>
            <br />
            <button>Submit</button>
        </form>
        <br />
        <p>{show?`Your Lucky Name is ${luckyName.current.value}`:""}</p>
        </div>
    )
}

export default Uncontrolled
