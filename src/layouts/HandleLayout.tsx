import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

export default function HandleLayout() {
  return (
    <>
      <div className="relative min-h-screen bg-[#BCA88D] flex flex-col overflow-x-hidden">
        {/* Imagen fondo en la parte inferior */}
        <div
          className="absolute bottom-0 left-0 w-full h-[300px] md:h-[450px] bg-no-repeat bg-bottom bg-contain"
          style={{ backgroundImage: "url('/background.png')" }}
          aria-hidden="true"
        />

        {/* Header */}
        <header className="sticky top-0 z-30 bg-[#3E3F29] bg-opacity-90 backdrop-blur-sm shadow-md py-4 flex justify-center">
          <Logo className="w-20 h-auto" />
        </header>

        {/* Contenido principal */}
        <main className="flex-grow max-w-lg mx-auto px-6 py-12 pb-24 text-[#F1F0E4] relative z-10">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="relative z-10 mt-12 py-10 text-center text-[#3E3F29] font-semibold text-base">
          <Link to="/">
            Crea tu propio <span className="font-bold">LinkPlaza</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
