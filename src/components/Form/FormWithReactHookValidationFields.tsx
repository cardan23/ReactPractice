import "bootstrap/dist/css/bootstrap.css";
import { FieldValues, useForm } from "react-hook-form";

//package needed
//nmp i react-hook-form

interface FormData {
  name: string;
  age: number;
}

function FormWithReactHookValidationFields() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <h2>React Hook Form with Validation Data</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"></label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <span className="text-danger">the name field is required</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-danger">
              the name field must have at least 3 characters
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input
            {...register("age", { required: true })}
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

export default FormWithReactHookValidationFields;
