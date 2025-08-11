import { Link } from "react-router-dom";

export default function HomeNavigation() {
  return (
    <>
      <Link
        className="bg-[#7D8D86]
                   text-white uppercase font-bold text-sm 
                   px-4 py-2 rounded-xl shadow-md 
                   hover:[#BCA88D]
                   hover:shadow-lg hover:scale-105 
                   active:scale-95 transition-all duration-200"
        to="/auth/login"
      >
        Iniciar Sesión
      </Link>

      <Link
        className="bg-gradient-to-r from-[#BCA88D] to-[#d1c1a9] 
                   text-[#F1F0E4] uppercase font-bold text-sm 
                   px-4 py-2 rounded-xl shadow-md 
                   hover:from-[#a38f71] hover:to-[#c0ad91] 
                   hover:shadow-lg hover:scale-105 
                   active:scale-95 transition-all duration-200 ml-3"
        to="/auth/register"
      >
        Registrarme
      </Link>
    </>
  );
}
