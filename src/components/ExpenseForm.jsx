import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ expenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let expenseObj = {};
    expenseObj.title = title;
    expenseObj.amount = amount;
    expenseObj.date =  new Date(date);
    expenseObj.id = Math.random()
    console.log(expenseObj)
    setTitle('')
    setAmount('')
    setDate('')

    expenseData(expenseObj)
  };
  return (
    <div className="new-expense">
      <form onSubmit={handleSubmit} action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="new-expense__actions">
            <button>Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
