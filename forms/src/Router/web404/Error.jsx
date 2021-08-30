import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Stle.css";

export const Error = () => {
    return (
        <>
        <div className="setStyle2">
            <h1>404 Error Page</h1>
            <p>Sorry,This page doesn't  Exit</p>
            <NavLink to="/">Go Back</NavLink>
        </div>
        </>
            )
}

export default Error;
