import { SocialNetwork, UserHandle } from "../types";

type HandleDataProps = {
  data: UserHandle;
};

export default function HandleData({ data }: HandleDataProps) {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled
  );

  return (
    <div className="space-y-8 max-w-xl mx-auto text-[#F1F0E4]">
      {/* Nombre */}
      <p className="text-7xl text-center font-bold tracking-tight drop-shadow-md text-[#ffffff]">
        {data.name}
      </p>

      {/* handle */}
      <p className="text-2xl text-center font-extrabold tracking-tight drop-shadow-md text-[#3E3F29]">
        @{data.handle}
      </p>

      {/* Imagen */}
      {data.image && (
        <img
          src={data.image}
          alt={data.handle}
          className="max-w-[200px] mx-auto rounded-lg shadow-lg ring-4 ring-[#BCA88D]/40"
        />
      )}

      {/* Descripción */}
      <p className="text-lg text-center font-medium italic text-[#3E3F29]">
        {data.description}
      </p>

      {/* Enlaces */}
      <div className="mt-12 flex flex-col gap-4">
        {links.length ? (
          links.map((link: SocialNetwork) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-lg bg-[#3E3F29] px-5 py-3 shadow-md transition-transform duration-200 ease-out hover:scale-105 hover:shadow-xl"
            >
              <img
                src={`/social/icon_${link.name}.svg`}
                alt={link.name}
                className="w-10"
              />
              <p className="capitalize font-semibold text-lg text-[#ffffff]">
                Visita mi {link.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-center italic text-[#7D8D86]">
            (No hay enlaces disponibles)
          </p>
        )}
      </div>
    </div>
  );
}
