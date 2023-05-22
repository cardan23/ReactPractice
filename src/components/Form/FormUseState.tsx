import "bootstrap/dist/css/bootstrap.css";
import { FormEvent, useState } from "react";

function FormUseState() {
  //using useState
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    //this line is to avoid the charge of the page
    event.preventDefault();

    console.log(person);
  };

  return (
    <>
      <h2>UseState Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"></label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input
            onChange={(event) => {
              console.log("rendered...");
              setPerson({ ...person, age: event.target.value });
            }}
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormUseState;
