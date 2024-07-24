import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const person = {
      name: "",
      age: 0,
    };

    if (nameRef.current)
      if (nameRef.current != null) person.name = nameRef.current.value;
    if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form-label">
        name
      </label>
      <input
        ref={nameRef}
        type="text"
        name="name"
        id="name"
        className="form-control"
      />
      <label htmlFor="age" className="form-label">
        age
      </label>
      <input
        ref={ageRef}
        type="number"
        name="age"
        id="age"
        className="form-control"
      />
      <input type="submit" className="btn btn-primary " value="submit" />
    </form>
  );
};

export default Form;
