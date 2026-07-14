import axios from "axios";




    
export const postLogin = async (identifier, password) => {

    const formData = new FormData();
    formData.append('username', identifier);
    formData.append('password', password);

    try {
        const response = await axios.post(
            "https://cinerag-api.onrender.com/auth/login", 
           formData
        );
        return response.data
    } catch(error) {
        throw (error.response.data.detail)
        
    } finally {
        console.log("request completed")
    } 
}

export const postRegister = async (username, email, password) => {

    const data = {username, password, email}

    try {
        const response = await axios.post(
            "https://cinerag-api.onrender.com/auth/register", 
            data
        )
        console.log(response)
        return response.data
    } catch (error) {
        throw (error.response.data.detail)
    
    } finally {
        console.log("requested completed")
    }

}

export const patchRegister = async (username, password, token) => {
    const data = {username, password}

    try {
        const response = await axios.patch(
            "http://127.0.0.1:8000/auth/complete-profile", 
            data,
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
        console.log("request completed")
    }
}