import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export default function HomeView() {
  return (
    <>
        <Header />

        <main className="bg-gray-100     py-1 min-h-screen bg-no-repeat bg-right-top lg:bg-home lg:bg-home-xl"> 
            <div className="max-w-5xl mx-auto mt-10 ">
                <div className="lg:w-1/2 px-10 lg:p-0 space-y-6"> 
                    <h1 className="text-6xl font-black"> 
                        Todas tus <span className="text-lime-500">redes sociales</span> en un solo lugar.
                    </h1>

                    <p className="text-slate-800 text-xl">
                        Conecta todas tus cuentas de redes sociales y accede a ellas desde un solo lugar. Crea tu perfil hoy mismo.
                    </p>

                    <SearchForm />
                </div>
            </div>
        </main>
    </>
  )
}
