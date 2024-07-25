import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="form-label">
        Full name
      </label>
      <input
        {...register("name", { required: true, minLength: 5 })}
        id="name"
        type="text"
        className="form-control"
      />
      {errors.name?.type === "minLength" && (
        <label htmlFor="age" className="form-label">
          invalid name, too small
        </label>
      )}
      {errors.name?.type === "required" && (
        <label htmlFor="age" className="form-label">
          name is required
        </label>
      )}
      <label htmlFor="age" className="form-label">
        Your age
      </label>

      <input
        {...register("age", { required: true, minLength: 5 })}
        type="number"
        id="age"
        className="form-control"
      />
      {errors.age?.type === "minLength" && (
        <label htmlFor="age" className="form-label">
          invalid age, too small
        </label>
      )}
      {errors.age?.type === "required" && (
        <label htmlFor="age" className="form-label">
          required
        </label>
      )}
      <input type="submit" value="submit" className="btn btn-primary my-2" />
    </form>
  );
};

export default Form;
