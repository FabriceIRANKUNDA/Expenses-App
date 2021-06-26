import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  const showExpenseFormHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm ? (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={showExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
