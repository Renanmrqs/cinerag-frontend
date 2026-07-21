import { use } from "react"
import { useState } from "react"

export function SeeSentimentFilm ( {sentimentReview, onClose} ) {
    const [closeBtn, setCloseBtn] = useState(true)
    
    return (
        
        <section className="sentiment-panel">
            
            
            <h1>Sentiment review</h1>
            <button className="close-sentiment" onClick={() => onClose(false)} >X</button>
            <h2>{sentimentReview.title}</h2>
            <span className={`badge ${sentimentReview.sentiment}`}> 
            {sentimentReview.sentiment} reviews
            </span>
    
                <p>Trust: {(sentimentReview.trust * 100).toFixed(0)}%</p>
            
            <div className="trust-bar">
                <div className="trust-fill" style={{ width: `${sentimentReview.trust * 100}% `}}></div>
            </div>

            <div className="reviews">
                <h3>Film reviews:</h3>
                {sentimentReview.sample_reviews.length > 0 ? (
                    sentimentReview.sample_reviews.map((review, index) => (
                    <p key={index}>{review}</p>
                    ))
                ) : ( 
                <p>No reviews for this film</p>
                )}
            </div>
                       
            

          
        
        </section>
    )
}