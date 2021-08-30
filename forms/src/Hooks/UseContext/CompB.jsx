import React from 'react';
import { FirstName } from  "./UseContext";
import CompC from './CompC';
import { useContext } from 'react';

const CompB =()=>{
const fname=useContext(FirstName);

return  <h1>
My name is {fname}.
</h1>

};

export default CompB;