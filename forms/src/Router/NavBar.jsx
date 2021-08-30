import React from 'react';
import {NavLink  } from 'react-router-dom';
import "./Router.css";

const NavBar = () => {
    return (
        <div className="menu_style">
        
       <NavLink exact activeClassName="active_class" to="/">
       About us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/Books">
       Books
        </NavLink>      
        <NavLink exact activeClassName="active_class" to="/Contact">Contact Us</NavLink>

    
      <NavLink exact activeClassName="active_class" to="/User/swati/sinha">User</NavLink>
      <NavLink exact activeClassName="active_class" to="/Search">Search</NavLink>
      <NavLink exact activeClassName="active_class" to="/Shop">Shop</NavLink>

 
        </div>
    )
}

export default NavBar
