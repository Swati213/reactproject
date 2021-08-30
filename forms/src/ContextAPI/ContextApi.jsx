import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();
const Age =createContext();

const ContextApi = () => {
  return (
    <>
      <FirstName.Provider value={"swati"}>
        <LastName.Provider value={"Sinha"}>
        <Age.Provider value={"18"}>
          <CompA />
          </Age.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextApi;
export { FirstName, LastName , Age };
