export default function NotFoundView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <h1 className="text-6xl font-extrabold text-white mb-6 select-none">
        😕
      </h1>
      <h2 className="text-4xl font-bold text-white mb-4">
        Usuario no encontrado
      </h2>
      <p className="text-white/90 mb-8 max-w-md text-center">
        No hemos podido encontrar el usuario que buscas. Puede que el enlace esté roto o que el usuario ya no exista.
      </p>
      <a
        href="/"
        className="bg-[#3E3F29] hover:bg-[#2a2b1d] text-[#F1F0E4] font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-200"
      >
        Volver al inicio
      </a>
    </div>
  );
}
