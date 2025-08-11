import { useForm } from "react-hook-form";
import slugify from "react-slugify"
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "./ErrorMessage";
import { SearchByHandle } from "../api/DevTreeAPI";
import { Link } from "react-router-dom";

export default function SearchForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      handle: "",
    },
  });

  const mutation = useMutation({
    mutationFn: SearchByHandle
  });
  console.log("Mutation status:", mutation);
  const handle = watch("handle");

  const handleSearch = () => {
    const slug = slugify(handle);
    mutation.mutate(slug)
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="space-y-5">
      <div className="relative flex items-center  bg-white  px-2">
        <label htmlFor="handle">TheLinkPlaza.com/</label>
        <input
          type="text"
          id="handle"
          className="border-none bg-transparent p-2 focus:ring-0 flex-1"
          placeholder="your name"
          {...register("handle", {
            required: "Un Nombre de Usuario es obligatorio",
          })}
        />
      </div>
      {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}

      <div className="mt-10">
        {mutation.isPending && <p className="text-center">Buscando...</p>}
        {mutation.isError && <p className="text-center text-red-600 font-black">{mutation.error.message}</p>}
        {mutation.data && <p className="text-center text-[#7D8D86] font-black">
          {mutation.data}   <Link to={`/auth/register`} className="underline text-[#3E3F29]" state={{handle: slugify(handle)}}> Ir a Registro </Link> 
        </p>}
      </div>

      <input
        type="submit"
        className="bg-[#3E3F29] p-3 text-lg w-full uppercase text-[#F1F0E4] rounded-lg font-bold cursor-pointer"
        value="Crear mi LinkPlaza"
      />
    </form>
  );
}
