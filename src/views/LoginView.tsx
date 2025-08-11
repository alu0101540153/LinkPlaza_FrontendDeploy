import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import ErrorMessage from "../components/ErrorMessage";
import { LoginForm } from "../types";
import api from "../config/axios";
import Logo from "../components/Logo";

export default function LoginView() {
  const navigate = useNavigate();
  const initialValues: LoginForm = { email: "", password: "" };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleLogin = async (formData: LoginForm) => {
    try {
      const { data } = await api.post(`/auth/login`, formData);
      localStorage.setItem("AUTH_TOKEN", data);
      navigate("/admin");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Error desconocido");
      }
    }
  };

  return (
    <div className="flex min-h-full bg-[#3E3F29] rounded-lg flex-col justify-center px-6 py-12 lg:px-8 relative z-10">
      {/* Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo className="mx-auto h-16 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      {/* Formulario */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6" noValidate>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="ejemplo@email.com"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
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
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                Contraseña
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#BCA88D] hover:text-[#7D8D86]">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="********"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
                {...register("password", {
                  required: "El Password es obligatorio",
                })}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </div>
          </div>

          {/* Botón */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#BCA88D] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#7D8D86] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BCA88D] transition-colors"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        {/* Registro */}
        <p className="mt-10 text-center text-sm text-white">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-[#F1F0E4] hover:text-[#7D8D86]"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
