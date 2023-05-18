import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
const App = () => {
  const expenses = [];
  const [expenseArr, setExpenseArr] = useState(expenses);
  console.log(expenseArr);

  const expenseData = (expenseInformation) => {
    const data = [...expenseArr, expenseInformation];
    setExpenseArr(data);
  };

  return (
    <>
      <ExpenseForm expenseData={expenseData} />

      <div className="expenses">
        {expenseArr.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            amount={item.amount}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default App;
