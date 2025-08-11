import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function AuthLayout() {
  return (
    <>
      <div className="relative min-h-screen bg-[#BCA88D] flex flex-col overflow-x-hidden">
        {/* Imagen fondo en la parte inferior */}
        <div
          className="absolute bottom-0 left-0 w-full h-[300px] md:h-[450px] bg-no-repeat bg-bottom bg-contain"
          style={{ backgroundImage: "url('/background.png')" }}
          aria-hidden="true"
        />

        {/* Header con color sólido */}
        <header className="sticky top-0 z-30 bg-[#3E3F29] shadow-md py-4 flex justify-center">
        </header>

        {/* Contenido principal */}
        <main className="flex-grow max-w-lg mx-auto px-6 py-12 text-[#3E3F29] relative z-10">
          <Outlet />
        </main>
      </div>

      {/* Notificaciones */}
      <Toaster position="top-right" />
    </>
  );
}
