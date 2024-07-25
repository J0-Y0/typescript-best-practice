import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expenseTracker/ExpenseList";
import ExpenseForm from "./expenseTracker/ExpenseForm";
import ExpenseFilter from "./expenseTracker/ExpenseFilter";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 0,
      description: "home to office one",
      amount: 789,
      category: "guzo",
    },
    {
      id: 1,
      description: "home to office",
      amount: 455,
      category: "transport",
    },
  ]);
  const [selectedCategory,setSelectedCategory] = useState("-")
  const handleDelete =  (id: Number)=>{
    setExpenses(expenses.filter((expense)=>expense.id!==id))
  }

  const visibeExpensies  = selectedCategory == "-" ?expenses: expenses.filter(expense=>expense.category == selectedCategory)
  console.log(selectedCategory);
  return (
    <>
      <ExpenseFilter
        categories={expenses.map((expense) => expense.category)}
        onFilter={(category) => setSelectedCategory(category)}
      />
      <ExpenseForm
        onSave={(data) =>
          setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
        }
      />
      <ExpenseList expenses={visibeExpensies} handleDelete={handleDelete} />
    </>
  );
};

export default App;
