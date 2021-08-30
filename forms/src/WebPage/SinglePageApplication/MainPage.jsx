import React from 'react';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom';


export const Home = () => {
    return (
      <>
        <Navbar/>
         {/*Hero Section */}
      <section className="hero-section">
            <p>Welcome TO</p>
            <h1>Cooking Home Page</h1>
        </section>
      </>
    );
  };

  export const About = () => {
    return (
      <>
        <Navbar/>
         {/*Hero Section */}
      <section className="hero-section">
            <p>Welcome TO</p>
            <h1>Cooking About Page</h1>
        </section>
      </>
    );
  };
  export const Service = () => {
    return (
      <>
        <Navbar/>
         {/*Hero Section */}
      <section className="hero-section">
            <p>Welcome TO</p>
            <h1>Cooking Service Page</h1>
        </section>
      </>
    );
  };
  export const Contact = () => {
    return (
      <>
        <Navbar/>
         {/*Hero Section */}
      <section className="hero-section">
            <p>Welcome TO</p>
            <h1>Cooking Contact Page</h1>
        </section>
      </>
    );
  };



const MainPage = () => {
    return (
        <>
          
          <Switch>
              <Route exact path="/" >
                  <Home/>
              </Route>
              <Route exact path="/about">
                  <About/>
              </Route>
              <Route exact path="/service" >
                  <Service/>
              </Route>
              <Route exact path="/contact">
                  <Contact/>
              </Route>

          </Switch> 
        </>
    )
}

export default MainPage;
