import React from "react";
import  "./UseReducer.css";
import { useReducer } from "react";

const initialState=0;

const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type ==="INCREMENT"){
      return state+1;
    }
    else{
    return state-1;;
    }
}

const UseReducer = () => {
  //const [count, setCount] = useState(1);
  const [state, dispatch] =  useReducer(reducer, initialState);
  
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>{state}</h1>
          <div className="btn-div">
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increm</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrem</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
