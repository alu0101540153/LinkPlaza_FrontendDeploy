import { isAxiosError } from "axios";
import api from "../config/axios";
import { User, UserHandle } from "../types";

export async function getUser(){
    try {
        // Realizar la petición POST a la API para registrar el usuario
        const {data} = await api<User>('/user')
        return data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        } 
    }
}

export async function updateProfile(formData: User){
    
    try {
        // Realizar la petición PATCH a la API para actualizar el perfil del usuario
        const {data} = await api.patch<string>('/user', formData);
        return data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error);
            throw new Error(error.response.data.error);
        } 
    }
}

export async function uploadImage(file: File) {
    let formData = new FormData()
    formData.append('file', file)
    try {
        const {data: {image}} : {data: {image: string}} = await api.post('/user/image', formData)
        return image
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error);
            throw new Error(error.response.data.error);
        }
    }
}


export async function getUserByHandle(handle: string){
    try {
        const {data} = await api<UserHandle>(`/${handle}`);
        return data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error);
            throw new Error(error.response.data.error);
        } 
    }
}

export async function SearchByHandle(handle: string){
    try {
        const {data} = await api.post('/search', {handle});
        return data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response.data.error);
            throw new Error(error.response.data.error);
        } 
    }
}