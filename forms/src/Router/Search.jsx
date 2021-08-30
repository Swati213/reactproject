import React from 'react'
import { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [data,setData]=useState("");
    const InputEvent =(event)=>{
         const e=event.target.value;
         setData(e);
    };
    return (
        <>
        <div className="style_search">
        <input  type="text" placeholder="Search Anything" value={data} onChange={InputEvent} />
        </div>
        <Sresult name={data}/>
        </>
    );
};

export default Search;
