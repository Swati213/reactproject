import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from '@material-ui/core/Tooltip';


import "./Materialui.css";
const MteriaUi = () => {
  const [count, setCount] = useState(1);
  const incEvent = () => {
    setCount(count + 1);
  };
  const decEvent = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry, zero limit is reached.");
      setCount(0);
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>{count}</h1>
          <div className="btn-div">
          <Tooltip title="Add">

            <Button onClick={incEvent} className="btn-green">
              <AddIcon />
            </Button>
            </Tooltip>
  
            <Tooltip title="Delete">
              <Button onClick={decEvent} className="btn-red">
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default MteriaUi;
