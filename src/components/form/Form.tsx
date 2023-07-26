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
  state: z.string().min(1, { message: "" }),
});
type FormData = z.infer<typeof schema>;

function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
          ADD
        </button>
      </form>
    </>
  );
}

export default Form;
