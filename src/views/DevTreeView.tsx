import { useEffect, useState } from 'react'
import { social} from '../data/social'
import DevTreeInput from '../components/DevTreeInput'
import { isValidUrl } from '../utils'
import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfile } from '../api/DevTreeAPI'
import { SocialNetwork, User } from '../types'


export default function DevTreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState(social)
  const queryClient = useQueryClient()
  const user: User = queryClient.getQueryData(['user'])!


  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onError: (error)=> { 
      toast.error(error.message)
    },
    onSuccess: () => {
      toast.success("Perfil actualizado correctamente")
    }
  })

  useEffect(()=> {
    const updatedData = devTreeLinks.map( item => {
      const userlink = JSON.parse(user.links).find((link:SocialNetwork) => link.name === item.name)
      if(userlink){
        return{ ...item, url: userlink.url , enabled: userlink.enabled}
      }
      return item
    })
    setDevTreeLinks(updatedData)
    
  }, [])

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value} : link)
    setDevTreeLinks(updatedLinks)

  }

  const links : SocialNetwork[] = JSON.parse(user.links) // lo que esta en la base de datos

  const handleEnableLink = (socialNetwork: string) => {
    const updatedLinks = devTreeLinks.map(link => {
      if(link.name === socialNetwork){
        if(isValidUrl(link.url)){
          return {...link, enabled: !link.enabled}
        } else{
          toast.error("URL no válida")
        }
        
      }
      return link
    })
    setDevTreeLinks(updatedLinks)

    let updatedItems: SocialNetwork[] = []  // items filtrados segun los habilidatos
    const selectedSocialNetwork =updatedLinks.find(link=> link.name === socialNetwork)
    if(selectedSocialNetwork?.enabled ){
      const id = links.filter(link => link.id).length + 1 // obtener el id del ultimo item habilitado
      if(links.some(link => link.name === socialNetwork)){
        updatedItems = links.map(link => {
          if(link.name === socialNetwork){
            return {...link, id, enabled: true} // asignar el id del item habilitado

          } else{
            return link // mantener los demas items
          }
        })
      }else {
        const newItem = {
          ...selectedSocialNetwork,
          id // asignar un nuevo ID
        }
        updatedItems = [...links, newItem]
      }

    } else {
      const indexToUpdate = links.findIndex(link => link.name === socialNetwork) // filtrar el item deshabilitado
      updatedItems = links.map(link => {
        if(link.name === socialNetwork){
          return {...link, id: 0 , enabled: false} // asignar id 0 y deshabilitar (id= 0 es para indicar que no esta habilitado)
        
        } else if(link.id > indexToUpdate && (link.id !== 0 && link.id === 1)) { // si el id es mayor al index del item deshabilitado, se reordena
          return {...link, id: link.id - 1} // reordenar los demas items
        }else {
          return link // mantener los demas items
        }
      })
    }

    // almacenar en la base de datos
    queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData, 
        links: JSON.stringify(updatedItems)
      }
    } )
  }


  return (
    <>
      <div className='space-y-5'>
        <button 
            className='bg-[#3E3F29] p-2 text-lg w-full uppercase text-[#F1F0E4] rounded font-bold'
            onClick={ () => mutate(queryClient.getQueryData(['user'])!) }
            >
          Guardar cambios
        </button>
        {devTreeLinks.map(item => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
            handleEnableLink={handleEnableLink}
          />
        ))}

      </div>
    
    
    </>
  )
}
