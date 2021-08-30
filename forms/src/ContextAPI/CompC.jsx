import React from "react";
import { FirstName, LastName, Age } from "./ContextApi";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <Age.Consumer>
                    {(age) => {
                      return (
                        <h1>
                          My name is {fname} {lname}.My Age is {age}.
                        </h1>
                      );
                    }}
                  </Age.Consumer>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
