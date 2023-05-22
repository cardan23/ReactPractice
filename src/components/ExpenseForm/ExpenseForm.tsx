import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./Categories";
import Message from "../../Message";

const schema = z.object({
  description: z.string().min(5),
  amount: z.number({ invalid_type_error: "amount is required" }).min(1),
  category: z.enum(categories, {
    errorMap: () => ({ message: "category is required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <h2>Expenses Form (listing, filtering and delete)</h2>
      <h3>React Hook Form with Validation Data Zod and HookForm Resolver</h3>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="label-form">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />

          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="label-form">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <span className="text-danger">{errors.amount.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="label-form">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-danger">{errors.category.message}</span>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseForm;
