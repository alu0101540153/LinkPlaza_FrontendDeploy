import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import type { RegisterForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import api from "../config/axios";
import Logo from "../components/Logo";

export default function RegisterView() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialValues: RegisterForm = {
    name: "",
    email: "",
    handle: location?.state?.handle || "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ defaultValues: initialValues });

  const password = watch("password");

  const handlerRegister = async (formData: RegisterForm) => {
    try {
      const { data } = await api.post(`/auth/register`, formData);
      toast.success(data);

      reset();
      navigate("/auth/login");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Error desconocido");
      }
    }
  };

  return (
    <div className="flex  bg-[#3E3F29] max-w-9xl rounded-lg flex-col justify-center px-6 py-12 lg:px-8 relative z-10">
      {/* Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <Logo className="mx-auto h-16 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Crea tu "Plaza" personal.
        </h2>
      </div>

      {/* Formulario */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
        <form onSubmit={handleSubmit(handlerRegister)} className="space-y-6" noValidate>
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu Nombre"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="ejemplo@email.com"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
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

          {/* Handle */}
          <div>
            <label htmlFor="handle" className="block text-sm font-medium text-white">
              Handle ( para la url )
            </label>
            <input
              id="handle"
              type="text"
              placeholder="Nombre de usuario: sin espacios"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register("handle", { required: "El handle es obligatorio" })}
            />
            {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register("password", {
                required: "El password es obligatorio",
                minLength: { value: 8, message: "El password debe tener al menos 8 caracteres" },
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </div>

          {/* Password Confirmation */}
          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-white">
              Repetir Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              placeholder="********"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register("password_confirmation", {
                required: "La confirmación de password es obligatoria",
                validate: (value) => value === password || "Las contraseñas no coinciden",
              })}
            />
            {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
          </div>

          {/* Botón */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#BCA88D] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#7D8D86] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BCA88D] transition-colors"
            >
              Crear Cuenta
            </button>
          </div>
        </form>

        {/* Link a Login */}
        <p className="mt-10 text-center text-sm text-white">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/auth/login" className="font-semibold text-[#F1F0E4] hover:text-[#7D8D86]">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
