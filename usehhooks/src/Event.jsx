import React, { useState } from"react";
import './Event.css';

const Event =()=>{
    const purple="#8e44ad";

    const[bg,setBg]=useState(purple);
    const[name,setName]=useState('click Me');
    const bgChange=()=>{
        let newBg="#34495e";
        setBg(newBg);
        setName('ouch!! 🎅')
    };
    const backChange=()=>{
      setBg('brown');
      setName('clown me !! 🥻');
    };
    return(
    <>
    <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={backChange}>
            {name}
        </button>
    </div>
    </>
    );
}

export default Event;