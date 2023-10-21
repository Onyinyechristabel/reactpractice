import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "class" + props.className;
  return <div className="cardexpense">{props.children}</div>;
}
export default Card;
