import { useState } from 'react'
import { useContext } from "react"  
import { getFilmSearch } from '../services/FilmsService'
import { AuthProviderContext } from "../context/UserContext";

    export const useFilmSearch =  () => {
        const [film, setFilm] = useState('')
        const [send, setSend] = useState(false)
        const [searchedUser, setSearchedUser] = useState('')
        const { user } = useContext(AuthProviderContext)
        const [isLoading, setIsLoading] = useState(false)
        
        const handleFilm = async (event) => {
            event.preventDefault()
            setIsLoading(true)
            try {
                const response = await getFilmSearch(film, user.accessToken)
                setSend(true)
                setSearchedUser(response)
                setIsLoading(false)
                
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        
        
        
        
        return {film, setFilm, send, searchedUser, handleFilm, isLoading}
    }