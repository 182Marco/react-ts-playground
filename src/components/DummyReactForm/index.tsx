import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./formSchema";

export const DummyReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // destructure a destructured
  } = useForm({ resolver: yupResolver(schema) });

  const save = (v: Record<string, string>) =>
    console.log(" DummyReactFormvalues ---> ", v);

  return (
    <div className="DummyReactForm">
      <h2>Testing react-hook-form library</h2>
      <form onSubmit={handleSubmit(save)}>
        <input {...register("name")} />
        <>{errors.name?.message}</>
        <input {...register("lastName")} />
        <input {...register("email")} />
        <input {...register("age")} />
        <input {...register("psw")} />
        <input {...register("confirmPsw")} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default DummyReactForm;
