import "bootstrap/dist/css/bootstrap.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Message from "../../Message";

//packages needed
//nmp i zod@latest
//npm i @hookform/resolvers@latest

const schema = z.object({
  name: z.string().min(3, { message: "Name should have at leat 3 chars" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "You should have at leat 18 years old" }),
});

type FormData = z.infer<typeof schema>;

function FormWithReactHookValidationFieldsZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <h2>React Hook Form with Validation Data Zod and HookForm Resolver</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"></label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && (
            <span className="text-danger">{errors.age.message}</span>
          )}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormWithReactHookValidationFieldsZod;
