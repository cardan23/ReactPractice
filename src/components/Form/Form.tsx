import "bootstrap/dist/css/bootstrap.css";
import { FormEvent, useRef } from "react";

function Form() {
  //using ref objects
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    //this line is to avoid the charge of the page
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <>
      <h2>UseRef Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"></label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
