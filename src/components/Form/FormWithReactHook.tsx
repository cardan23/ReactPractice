import "bootstrap/dist/css/bootstrap.css";
import { FieldValues, useForm } from "react-hook-form";

//package needed
//nmp i react-hook-form

function FormWithReactHook() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <h2>React Hook Form Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"></label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input
            {...register("age")}
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

export default FormWithReactHook;
