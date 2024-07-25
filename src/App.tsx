import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expenseTracker/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 0,
      description: "home to office one",
      amount: 789,
      category: "transport",
    },
    {
      id: 1,
      description: "home to office",
      amount: 455,
      category: "transport",
    },
  ]);
  const handleDelete =  (id: Number)=>{
    setExpenses(expenses.filter((expense)=>expense.id!==id))
  }
  return (
    <>
     <ExpenseList expenses= {expenses}  handleDelete = {handleDelete}  />
    </>
  );
};

export default App;
