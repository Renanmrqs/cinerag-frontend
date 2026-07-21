import axios from "axios";
import { useContext } from "react";

export const getApiHealth = () => {
    try {
        const response = axios.get(
            'https://cinerag-api.onrender.com/health'
        )
        return response.data
    } catch (error) {
        throw (error.response.data.detail)
    }  finally {
        console.log('requested completed')
    }
}