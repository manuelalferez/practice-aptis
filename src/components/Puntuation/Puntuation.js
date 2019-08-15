import React from "react";
import "./Puntuation.css";

function Puntuation(props) {
  return (
    <div className="Puntuation">
      <div className="Puntuation___well">Well : {props.well}</div>
      <div className="Puntuation___wrong">Wrong: {props.wrong}</div>
    </div>
  );
}

export default Puntuation;
