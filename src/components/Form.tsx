import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        console.log(person);
      }}
    >
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        value={person.name}
        onChange={handleSubmit}
        type="text"
        name="name"
        id="name"
        className="form-control"
      />
      <label htmlFor="age" className="form-label">
        age
      </label>
      <input
        value={person.age}
        onChange={handleSubmit}
        type="number"
        className="form-control"
        name="age"
        id="age"
      />
      <input type="submit" value="submit" className="btn btn-primary mt-2" />
    </form>
  );
};

export default Form;
