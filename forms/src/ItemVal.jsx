import React from  "react";

const ItemVal=(props)=>{
    return (
    <>
    <div className="todo_style">
    <i className="fa fa-close" aria-hidden="true" onClick={()=>{
       props.onSelect(props.id);
    }}/>
    <li>{props.text}</li>
    </div>
    </>
    );

}
export default ItemVal;