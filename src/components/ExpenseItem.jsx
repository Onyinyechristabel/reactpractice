import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  return (
    <Card className="expense">
      <ExpenseDate date={props.date} />
      <div className="expense__description">{props.title}</div>
      <div className="expense__amount">${props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;
