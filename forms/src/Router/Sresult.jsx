import React from 'react'
import "./Router.css";
const Sresult = (props) => {
    const imgV= `https://source.unsplash.com/300x500/?${props.name}`;
    return (
        <>
        <div>
            <img className="center" src={imgV} alt="search" />
            </div>
        </>
    );
};

export default Sresult;
