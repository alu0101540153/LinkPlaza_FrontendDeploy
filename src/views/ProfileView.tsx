import { useForm } from 'react-hook-form'
import ErrorMessage from '../components/ErrorMessage'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { ProfileForm, User } from '../types'
import { updateProfile, uploadImage } from '../api/DevTreeAPI'
import { toast } from 'sonner'

export default function ProfileView() {
  const queryClient = useQueryClient()
  const data: User = queryClient.getQueryData(['user'])!

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    defaultValues: {
      handle: data.handle,
      description: data.description,
      name: data.name
    },
  })

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data, variables) => {
      toast.success(data)
      // Actualizar directamente el cache con los nuevos datos
      queryClient.setQueryData(['user'], variables)
    },
  })

  const uploadImageMutation = useMutation({
    mutationFn: uploadImage,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success('Imagen subida correctamente')
      queryClient.setQueryData(['user'], (prevData: User) => ({
        ...prevData,
        image: data,
      }))
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadImageMutation.mutate(e.target.files[0])
    }
  }

  const handleUserProfileForm = (formData: ProfileForm) => {
    const user: User = queryClient.getQueryData(['user'])!
    const updatedUser = {
      ...user,
      name: formData.name,
      handle: formData.handle,
      description: formData.description
    }
    
    updateProfileMutation.mutate(updatedUser)
  }

  return (
    <div className="flex bg-[#3E3F29] max-w-9xl rounded-lg flex-col justify-center px-6 py-12 lg:px-8 relative z-10">
      <h2 className="text-center text-2xl font-bold text-white">
        Editar tu perfil
      </h2>

      {/* Formulario */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(handleUserProfileForm)}
          noValidate
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 
                         outline-1 -outline-offset-1 outline-white/10 
                         focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register('name', { required: 'El nombre es obligatorio' })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          {/* Handle */}
          <div>
            <label
              htmlFor="handle"
              className="block text-sm font-medium text-white"
            >
              Handle
            </label>
            <input
              type="text"
              id="handle"
              placeholder="handle o Nombre de Usuario"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 
                         outline-1 -outline-offset-1 outline-white/10 
                         focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register('handle', {
                required: 'El handle es obligatorio',
              })}
            />
            {errors.handle && (
              <ErrorMessage>{errors.handle.message}</ErrorMessage>
            )}
          </div>

          {/* Descripción */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white"
            >
              Descripción
            </label>
            <textarea
              id="description"
              placeholder="Tu descripción"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 
                         outline-1 -outline-offset-1 outline-white/10 
                         focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              {...register('description', {
              })}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </div>

          {/* Imagen */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-white"
            >
              Imagen
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 
                         outline-1 -outline-offset-1 outline-white/10 
                         focus:outline-2 focus:-outline-offset-2 focus:outline-[#BCA88D] sm:text-sm"
              onChange={handleChange}
            />
          </div>

          {/* Botón */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#BCA88D] px-3 py-1.5 text-sm font-semibold text-white 
                         hover:bg-[#7D8D86] focus-visible:outline-2 
                         focus-visible:outline-offset-2 focus-visible:outline-[#BCA88D] transition-colors"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
