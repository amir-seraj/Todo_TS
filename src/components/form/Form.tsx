import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  todoText: z
    .string()
    .min(10, { message: "Task characters must be at least 10 characters" }),
  date: z.date(),
});
type FormData = z.infer<typeof schema>;

function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="todoText" className="form-label">
          todoText
        </label>
        <input
          {...register("todoText")}
          type="text"
          id="todoText"
          className="form-control"
        />

        {errors.todoText && (
          <p className="text-danger">{errors.todoText.message}</p>
        )}
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </>
  );
}

export default Form;
