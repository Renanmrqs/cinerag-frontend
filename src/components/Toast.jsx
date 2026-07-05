import { useState } from 'react';
import { useEffect } from 'react';

function Toast ( {children, variant} ) {
    const [showToast, setShowToast] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false); 
        }, 3000)
    
    
    }, [])
    
    return (
        <div className={variant} >
            {children}
        </div>
)
}

export default Toast