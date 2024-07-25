import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { z } from "zod"
const schema = z.object({
  description: z.string().min(5).max(20),
  category: z.string().min(5).max(20),
  amount: z.number().min(0).max(500),
}); 

type FormData = z.infer<typeof schema>;
interface Props{
    onSave:(data:FormData)=>void
}
const ExpenseForm = ({onSave}:Props) => {
    const { register, handleSubmit,formState:{errors},reset } = useForm<FormData>({
      resolver: zodResolver(schema),
    });
    // const onSubmit = (data:FieldValues) => {
   
    return (
        <form action="" onSubmit={handleSubmit((data) => { onSave(data); reset()})}>
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <input
        {...register("description")}
        type="text"
        id="description"
        className="form-control"
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <br></br>
      <label htmlFor="amount" className="form-label">
        {" "}
        Amount
      </label>
      <input
        {...register("amount", { valueAsNumber: true })}
        type="number"
        id="amount"
        className="form-control"
      />
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

      <br></br>

      <label htmlFor="category" className="form-label">
        Category
      </label>
      <input
        {...register("category")}
        type="text"
        id="category"
        className="form-control"
      />
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <br></br>
      <input type="submit" value="Save" className="btn btn-primary" />
      <br></br>
    </form>
  );
};

export default ExpenseForm;
