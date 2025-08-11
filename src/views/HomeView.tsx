import Header from "../components/Header";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

export default function HomeView() {
  return (
    <>
      <Header />

      {/* Hero principal */}
      <main className="bg-[#F1F0E4] py-12 min-h-screen bg-no-repeat bg-right-bottom lg:bg-home lg:bg-home-xl lg:bg-right-bottom">
        <div className="max-w-5xl mx-auto mt-10">
          <div className="lg:w-2/3 px-10 lg:p-0 space-y-6">
            <h1 className="text-6xl font-black text-[#3E3F29]">
              Todas tus{" "}
              <span className="text-[#a5947c]">redes sociales</span> en una Plaza
            </h1>

            <p className="text-[#3E3F29] text-xl">
              Conecta todas tus cuentas de redes sociales y accede a ellas desde
              un solo lugar. Crea tu perfil hoy mismo y comparte tu plaza con el mundo.
            </p>

            <SearchForm />
          </div>
        </div>
      </main>

      
    {/* Sección de ejemplos de LinkTrees */}
    <section className="bg-[#7D8D86] py-16">
    <div className="max-w-6xl mx-auto px-6 text-[#F1F0E4]">
        <h2 className="text-4xl font-bold mb-8 text-center">Ejemplos de LinkPlaza</h2>
        <div
        className="flex space-x-6 overflow-x-auto no-scrollbar pb-4"
        style={{ scrollSnapType: "x mandatory" }}
        >
        {[
            {
            name: "Víctor Rodríguez Dorta",
            img: "https://avatars.githubusercontent.com/u/114820965?v=4",
            url: "/victorrgez"
            },
            {
            name: "Bruno Mars",
            img: "https://tse1.explicit.bing.net/th/id/OIP.JlFJ77GpRDbkBO397hcfTgHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
            url: "/brunomars",
            },
            {
            name: "Lionel Messi",
            img: "https://i.pinimg.com/originals/66/46/51/66465125902f0b331e4b1d60397b40b7.jpg",
            url: "/lionelmessi",
            },
            {
            name: "Emma Stone",
            img: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_FMjpg_UX1000_.jpg",
            url: "/emmastone",
            }
        ].map(({ name, img, url }) => (
            <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-64 bg-[#3E3F29] rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ scrollSnapAlign: "start" }}
            >
            <img
                src={img}
                alt={`${name} profile`}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#BCA88D]"
            />
            <h3 className="text-xl font-semibold text-center">{name}</h3>
            <p className="text-[#ffffff] underline">Visitar su Plaza</p>
            </a>
        ))}
        </div>
    </div>
    </section>


      {/* Sección de llamada a la acción */}
      <section className="bg-[#BCA88D] py-16 text-center text-[#3E3F29]">
        <h2 className="text-3xl font-bold mb-4">
            ¡Crea tu propia LinkPlaza ahora!
        </h2>
        <p className="mb-6">
          Una ciudad de enlaces, donde cada perfil brilla con luz propia.
          <p>Comparte tu plaza con el mundo y descubre nuevas conexiones.</p>
          
        </p>
        <a
          href="/auth/register"
          className="bg-gradient-to-r from-[#3E3F29] to-[#7D8D86] 
                     text-[#F1F0E4] uppercase font-bold px-6 py-3 
                     rounded-xl shadow-md hover:scale-105 active:scale-95 
                     transition-all duration-200"
        >
          Crear cuenta gratis
        </a>
      </section>



      {/* Footer */}
      <footer className="bg-[#3E3F29] text-[#F1F0E4] py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} TheLinkPlaza - Todos los derechos reservados 
          </p>
          <p className="mb-4 md:mb-0">
            Creado por Víctor Rodríguez Dorta
          </p>

          <p>
            <Logo />
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#BCA88D] transition-colors">Términos</a>
            <a href="#" className="hover:text-[#BCA88D] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#BCA88D] transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </>
  );
}
