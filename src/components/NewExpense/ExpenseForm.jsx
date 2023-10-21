import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setuserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //   setuserInput((prevState) => {
    //       return { ...prevState, enteredTitle: event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label className="label__title">Title</label>
          <input
            className="input__details"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense_control">
          <label className="label__amount">Amount</label>
          <input
            className="input__details"
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min={0.01}
            step={0.01}
          />
        </div>

        <div className="new-expense_control">
          <label className="label__date">Date</label>
          <input
            className="input__details"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min={2019 - 1 - 1}
            max={2022 - 12 - 31}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button className="submit" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
