import { SocialNetwork, UserHandle } from "../types"

type HandleDataProps = {
    data: UserHandle
}
export default function HandleData({ data }: HandleDataProps) {
    const links: SocialNetwork[] = JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled)

  return (
    <div className="space-y-6 text-white">
        <p className="text-5xl text-center font-bold">{data.handle}</p>
        { data.image && <img src={data.image} alt={data.handle} className="max-w-[250px] mx-auto" /> }
        <p className="text-lg text-center font-bold">{data.description}</p>
        <div className="mt-20 flex flex-col gap-6">
            {links.length ?
                links.map((link: SocialNetwork) => (
                   <a
                        key={link.name}
                     className="bg-white px-5 py-2 flex intems-center gap-5 rounded-lg"
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                        <img
                            src={`/social/icon_${link.name}.svg`}
                            alt={link.name}
                            className="w-12"
                        />
                       <p className="text-black capitalize font-bold text-lg"> Visita mi: {link.name}</p>
                   </a>
                ))
            : <p className="text-center">( No hay enlaces disponibles )</p>}
        </div>
    </div>
  )
}
