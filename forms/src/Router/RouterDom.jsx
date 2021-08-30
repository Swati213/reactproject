import React from "react";
import { Route, Switch} from 'react-router-dom';

import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Shop from "./Shop";
import NavBar from "./NavBar";
import "./Router.css";
import Books from "./Books";
import User from "./User";
import Search from "./Search";
const RouterDom = () => {
  const Name=()=>{
    return <h1>Hi,I am Name Page</h1> ;

  };
  return (
    <>
      <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={()=>{
         return  <About name="About"/>
        }}/>
        
        <Route exact path="/Books" render={()=>  <Books name="Books"/>
        }/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/contact/Name" component={Name}/>
        <Route path="/user/:name/:lname" component={User}/>
        <Route exact path="/search" component={Search}/>


        <Route exact path="/shop" component={Shop}/>
        <Route component={Error}/>
      </Switch>
      
      </div>
    </>
  );
};

export default RouterDom;
