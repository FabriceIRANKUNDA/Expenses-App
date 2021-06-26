import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMIES_EXPENSES = [
  {
    key: "e1",
    title: "Car insurance",
    amount: 309,
    date: new Date(2021, 2, 28)
  },
  {
    key: "e2",
    title: "Car insurance",
    amount: 309,
    date: new Date(2020, 2, 28)
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMIES_EXPENSES)

  const addExpenseHandler = (newExpense) => {
    setExpenses(prevState =>{
      return [newExpense, ...prevState]
    })
  };
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
