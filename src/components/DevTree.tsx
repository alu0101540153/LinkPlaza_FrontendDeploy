import { toast, Toaster } from "sonner";
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { SocialNetwork, User } from "../types";
import NavigationTabs from "./NavigationTabs"
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import DevTreeLink from "./DevTreeLink";
import { useQueryClient } from "@tanstack/react-query";
import Header from "./Header";


type DevTreeProps = {
    data: User
}

export default function DevTree({ data }: DevTreeProps) {
    const [enabledLinks, setEnabledLinks] = useState<SocialNetwork[]>(JSON.parse(data.links).filter((item:SocialNetwork) => item.enabled))
    useEffect(() => {
        setEnabledLinks(JSON.parse(data.links).filter((item:SocialNetwork) => item.enabled))
    }, [data])

    const queryClient = useQueryClient() 


    const handleDragEnd = (e: DragEndEvent ) => {
        
        const {active, over} = e // active: Element being dragged, over: Element being hovered over

        if (over && over.id) {
            const prevIndex = enabledLinks.findIndex(link => link.id === active.id)
            const newIndex = enabledLinks.findIndex(link => link.id === over.id)
            // reorder the links
            const order = arrayMove(enabledLinks, prevIndex, newIndex) 
            setEnabledLinks(order) // update the state with the new order

            const disabledLinks: SocialNetwork[] = JSON.parse(data.links).filter((item:SocialNetwork) => !item.enabled)
            const links = order.concat(disabledLinks)
            queryClient.setQueryData(['user'], (prevData: User)=> { // seteando el cache del usuario
                return { ...prevData,
                            links: JSON.stringify(links) // actualizando los links del usuario
                }
            })
        }
    }

  return (
    
        <>
            <Header />
            <div className="bg-[#F1F0E4]  min-h-screen py-10">
                <main className="mx-auto max-w-5xl p-10 md:p-0">
                    <NavigationTabs />
                    
                    <div className="flex justify-end mb-4">

                    </div>

                    <div className="flex justify-end">
                        <Link 
                            className="font-bold text-right text-[#3E3F29] text-2xl bg-[#BCA88D] px-4 py-2 rounded-lg"
                            to={`/${data.handle}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >Visitar mi Plaza /{data.handle}</Link>
                        

                            <button
                            className="flex items-center gap-2 font-bold text-[#F1F0E4] text-lg bg-[#7D8D86] px-4 py-2 rounded-lg hover:bg-[#D6C3A1] transition"
                            onClick={() => {
                                navigator.clipboard.writeText(`${window.location.origin}/${data.handle}`)
                                .then(() => {
                                    toast.success("Enlace copiado");
                                })
                                .catch(() => {
                                    toast.error("Error al copiar el enlace");
                                });
                            }}
                            type="button"
                            >
                            Copiar enlace
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17v1a3 3 0 003 3h6a3 3 0 003-3v-6a3 3 0 00-3-3h-1M16 7V6a3 3 0 00-3-3H7a3 3 0 00-3 3v6a3 3 0 003 3h1" />
                            </svg>
                            </button>
                    </div>



                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        


                        <div className="flex-1 ">
                            <Outlet />
                        </div>
                        <div className="w-full md:w-96 bg-[#3E3F29] rounded-lg px-5 py-10 space-y-6">
                           <p className="text-4xl text-center text-white">
                               {data.handle}
                           </p>
                           {data.image && <img src={data.image} alt='Imagen Perfil' className="mx-auto max-w-[250px]" />}

                           <p className="tex-center text-lg font-black text-white">
                               {data.description}
                           </p>

                           <DndContext
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >

                           

                           <div className="mt-20 flex flex-col gap-5">
                                <SortableContext
                                    items={enabledLinks}
                                    strategy={verticalListSortingStrategy}
                                >
                                    { enabledLinks.map(link => (
                                            <DevTreeLink key = {link.name} link={link}></DevTreeLink>
                                    ))}

                                </SortableContext>

                           </div>
                            </DndContext>
                           
                        </div>
                    </div>
                </main>
            </div>
            <Toaster position="top-right" />
        </>
  )
}
