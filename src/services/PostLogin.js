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
        return response.data
    } finally {
        console.log("request completed")
    } 
}
