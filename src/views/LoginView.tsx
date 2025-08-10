import { Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import {toast} from "sonner";
import { isAxiosError } from "axios";
import ErrorMessage from "../components/ErrorMessage";
import { LoginForm } from "../types";
import api from "../config/axios";

export default function LoginView() {
  const navigate = useNavigate();
  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleLogin = async (formData: LoginForm) => {
        try {
          // Realizar la petición POST a la API para registrar el usuario
          const {data} = await api.post(`/auth/login`, formData);
          localStorage.setItem("AUTH_TOKEN", data);
          navigate ("/admin")
        } catch (error) {
          if (isAxiosError(error) && error.response) {
            toast.error(error.response.data.error)
          } else {
            toast.error("Error desconocido:");
          }
        }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-white">Iniciar Sesión</h1>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El Password es obligatorio",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Iniciar Sesión"
        />
      </form>

      <nav className="mt-10">
        <Link
          className="text-center text-white block text-lg"
          to="/auth/register"
        >
          No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
}
