import { useEffect, useState } from 'react'
import { useContext } from "react"  
import { getFilmSearch } from '../services/FilmsService'
import { AuthProviderContext } from "../context/UserContext";
import { getApiHealth } from '../services/HealthService';

export const useApiService = () => {
    const [apiOn, setApiOn] = useState(false)
    const [apiLoad, setApiLoad] = useState(true)
    
    const handleHealth = async () => {
        try {
        const response = await getApiHealth()
        setApiOn(true)
        setApiLoad(false)
    } catch (error) {
        setApiOn(false)
        setApiLoad(false)
        console.log(error)
    }
}


    useEffect ( () => {
        const timer = setInterval( () => {
            handleHealth(); }, 4000)
        
    return () => {
        clearInterval(timer)
    }
    }, [])

    return { apiLoad, apiOn }

}
    