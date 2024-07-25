// npm i zod
// npm i react-hook-form
//npm i @reacthook/resolvers
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//define schema
const schema = z.object({
  name: z
    .string()
    .startsWith("yos", { message: "Must start with yos" })
    .min(4)
    .max(7),
  age: z
    .number({ invalid_type_error: "invalid  format" })
    .positive({ message: "must be positive" })
    .min(25),
});
// type is similar to interface
type FormData = z.infer<typeof schema>;

const Form = () => {
  // integrate zod and react-hook-form ,useForm
  //using resolvers
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, ii },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="form-label">
        Full name
      </label>
      <input
        {...register("name")}
        id="name"
        type="text"
        className="form-control"
      />
      {errors.name && (
        <label htmlFor="name" className="form-label text-danger">
          {errors.name.message}
        </label>
      )}

      <br></br>
      <label htmlFor="age" className="form-label">
        Your age
      </label>

      <input
        {...register("age", { valueAsNumber: true })}
        type="number"
        id="age"
        className="form-control"
      />
      {errors.age && (
        <label htmlFor="age" className="form-label text-danger">
          {errors.age.message}
        </label>
      )}
      <br></br>
      <input
        type="submit"
        // disabled={ !isValid}
        value="submit"
        className="btn btn-primary my-2"
      />
    </form>
  );
};

export default Form;
