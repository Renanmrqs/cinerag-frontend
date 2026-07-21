import axios from "axios";
import { useContext } from "react";


   
export const getFilmSearch = async (data, token) => {
    console.log(data)
    try {
        const response = await axios.get(
            `https://cinerag-api.onrender.com/films/search_film/${data}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

        )
        console.log(response.data)
        return response.data
    } catch (error) {
        throw (error.response.data.detail)
    } finally {
        console.log('requested completed')
    }
}

export const getSentimentReview = async (id, token) => {
    
    try {
        const response = await axios.get(
            `https://cinerag-api.onrender.com/films/get_score/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        console.log(response.data)
        return response.data
    } catch (error) {
        throw (error.response.data.detail)
    } finally {
        console.log('reques completed')
    }

}
// export const patchRegister = async (username, password, token) => {
//     const data = {username, password}

//     try {
//         const response = await axios.patch(
//             "http://127.0.0.1:8000/auth/complete-profile", 
//             data,
//             {
//              headers: {
//                 'Authorization': `Bearer ${token}`
//                 }
//             }
//         )
//         console.log(response.data)
//         return response.data
//     } catch (error) {
//         throw (error.response.data.detail)
//     } finally {
//         console.log("request completed")
//     }
// }