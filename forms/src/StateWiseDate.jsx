import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./StateWiseData.css";
import { useEffect } from "react";
import { useState } from "react";

const StateWiseDate = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise);
      setData(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>STATE</th>
                <th>CONFIRMED</th>
                <th>RECOVERED</th>
                <th>DEATHS</th>
                <th>ACTIVE</th>
                <th>UPDATED</th>
              </tr>
            </thead>
            <tbody>
            {
              data.map((curElem,ind)=>{
               return(
                <tr>
                <th>{curElem.state}</th>
                <td>{curElem.confirmed}</td>
                <td>{curElem.recovered}</td>
                <td>{curElem.deaths}</td>
                <td>{curElem.active}</td>
                <td>{curElem.lastupdatedtime}</td>
              </tr>
               )
              })
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWiseDate;
