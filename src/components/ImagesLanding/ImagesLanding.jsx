function ImagesLanding ( {image} ) {

    
    return (
    <section className="images-landing">
        {image.map( (section) => (
    
            <div className="image-page" key={section.title}>
                
                <div className="content-text">
                    <h1>{section.title}</h1>
                    <p>{section.description}</p>
                </div>
                
                <div className="content-img">
                    {onmousemove}
                    <img src={section.img} alt="screeshot projet" />
                </div>
                
                
                
            
            </div>
        ))}                  

        
    </section>
      
    )
}

export default ImagesLanding