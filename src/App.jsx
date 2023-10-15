import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";
function App() {
  const [count, setCount] = useState(0);
  const expense = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.17,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 104.17,
      date: new Date(2021, 1, 23),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 23.17,
      date: new Date(2020, 6, 5),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 113.17,
      date: new Date(2022, 5, 4),
    },
  ];
  return (
    <div>
      <Expense items={expense} />
    </div>
  );
}

export default App;
