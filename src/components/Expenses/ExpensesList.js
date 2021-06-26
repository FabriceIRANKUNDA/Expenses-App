import React from "react";
import ExpenseItem from "./expenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((exp) => {
        return (
          <ExpenseItem
            key={exp.key}
            title={exp.title}
            date={exp.date}
            amount={exp.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
