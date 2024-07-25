import React from "react";

interface Expense {
  id: number;
  description: String;
  amount: number;
  category: String;
}

interface Props {
    expenses: Expense[];
    handleDelete:(id:number)=>void
}

const ExpenseList = ({ expenses, handleDelete }: Props) => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>category</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => handleDelete(expense.id)}
                className="btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $ {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
