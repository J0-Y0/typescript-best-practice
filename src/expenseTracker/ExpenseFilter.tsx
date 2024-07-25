import React from 'react'
import { string } from 'zod';

interface Props{
    categories: string[]
    onFilter:(value:string)=>void
}
const ExpenseFilter = ({ categories, onFilter }: Props) => {
    return (
      
    <div>
        <select
          className="form-select"
          onChange={(event) => onFilter(event.target.value)}
        >
          <option value="-">All</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
    </div>
  );
};

export default ExpenseFilter
