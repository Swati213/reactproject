import React from "react";

import { Route, Switch,Redirect} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
//import Error from "./Error";
import NavBar from "./NavBar";
import Home from "./Home";

const Main = () => {
  return (
    <>
      <div>
      <NavBar/>
      <Switch>
       <Route exact path="/" component={Home}/>
  
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>

        {/*<Route component={Error}/>*/}
        <Redirect to="/"/>

      </Switch>
      
      </div>
    </>
  );
};

export default Main;
