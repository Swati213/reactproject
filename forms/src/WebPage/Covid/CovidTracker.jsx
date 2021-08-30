import React from "react";
import "./Covid.css";
import { useEffect } from "react";
import { useState } from "react";

const CovidTracker = () => {
  const [data,setData]=useState([]);
  
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <div>
          <h1 className="header__1">🔴 Live</h1>
          <h2 className="header__2">COVID-19 CORONAVIRUS TRACKER</h2>
        </div>
        <ul>
          <div className="card__direx">
            <li className="card card__1">
              <div className="card__main">
                <div className="card__inner ">
                  <p className="card__name">
                    <span>OUR</span>COUNTRY
                  </p>
                  <p className="card__total card__small">INDIA </p>
                </div>
              </div>
            </li>
            <li className="card card__2">
              <div className="card__main">
                <div className="card__inner ">
                  <p className="card__name">
                    <span>TOTAL</span>RECOVERED
                  </p>
                  <p className="card__total card__small">{data.recovered} </p>
                </div>
              </div>
            </li>
            <li className="card card__3">
              <div className="card__main">
                <div className="card__inner ">
                  <p className="card__name">
                    <span>TOTAL</span>CONFIRMED
                  </p>
                  <p className="card__total card__small">{data.confirmed} </p>
                </div>
              </div>
            </li>
          </div>
          <div className="card__direx">
            <li className="card card__4">
              <div className="card__main">
                <div className="card__inner ">
                  <p className="card__name">
                    <span>OUR</span>DEATH
                  </p>
                  <p className="card__total card__small">{data.deaths}</p>
                </div>
              </div>
            </li>
            <li className="card card__5">
              <div className="card__main">
                <div className="card__inner ">
                  <p className="card__name">
                    <span>OUR</span>ACTIVE
                  </p>
                  <p className="card__total card__small">{data.active}</p>
                </div>
              </div>
            </li>
            <li className="card card__6">
              <div className="card__main ">
                <div className="card__inner ">
                  <p className="card__name">
                    <span>OUR</span>UPDATED
                  </p>
                  <p className="card__total card__small ">INDIA</p>
                </div>
              </div>
            </li>
          </div>
        </ul>
      </section>
    </>
  );
};

export default CovidTracker;
