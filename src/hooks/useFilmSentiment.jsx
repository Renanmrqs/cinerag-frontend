import { useState } from "react"
import { getSentimentReview } from "../services/FilmsService"
import { AuthProviderContext } from "../context/UserContext"
import { useContext } from "react"

export const useFilmSentiment = () => {
    const [sentimentTrigger, setSentimentTrigger] = useState(false)
    const [sentimentItem, setSentimentItem] = useState('')
    const { user } = useContext(AuthProviderContext)
    const [isLoadingSentiment, setIsLoadingSentiment] = useState(false)

    const handleSentiment = async (id) => {
        setIsLoadingSentiment(true)
        try {
            const response = await getSentimentReview(id, user.accessToken )
            setSentimentTrigger(true)
            setSentimentItem(response)
            setIsLoadingSentiment(false)
            
        } catch (error) {
            setIsLoadingSentiment(false)
            console.log(error)
        }
    }

    return {sentimentTrigger, sentimentItem, handleSentiment, isLoadingSentiment, setSentimentTrigger}
}