import React, { useState } from "react";
import  ItemVal from "./ItemVal";
import './ToDoList.css';
const ToDoList=()=>{
    const[inputList, setInputList]=useState("");
    const[Items,setListItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);

    };
    const listOfItems=()=>{
         setListItems((oldItems)=>{
             return[...oldItems,inputList];
         });
        setInputList("");
    };
    const deleteItems =(id)=>{
     setListItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
         return index !==id;
        })
     })
    };
   
 return(
     <>
       <div className="main-div">
       <div className="center-div">
           <br/>
           <h1>ToDo List</h1>
           <br/>
           <input type="text" placeholder="Add a Items" 
           value={inputList}
           onChange={itemEvent}/>
           <button onClick={listOfItems}>+</button>
           <ol>
               {/*<li>{inputList}</li>*/}
            {Items.map( (itemVal,index)=> {
              return  <ItemVal key={index} 
              id={index}
              text={itemVal}
             onSelect={deleteItems}
              />;
              } )}
           </ol>
           </div>
       </div>
     </>
 );

}

export default ToDoList;