import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <Card>
      <ExpenseDate date={props.date} />
      <div className="expense__description">{props.title}</div>
      <div className="expense__amount">${props.amount}</div>
    </Card>
  );
};
export default ExpenseItem;
