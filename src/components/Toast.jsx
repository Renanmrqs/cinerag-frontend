import { useEffect } from 'react';

function Toast ( {children, variant="toast-normal", trigger, onClose} ) {

    useEffect(() => {
        const timer = setTimeout(() => { 
            onClose(); }, 3000)
    timer
    }, [trigger])
    
    return (
        trigger ? 
        
        <div className={`toast ${variant}`}>
                {children}
        </div> : 
        null
        
        
    )
      
}

export default Toast