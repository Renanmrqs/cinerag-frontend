import { useEffect, useState } from "react";
import { AuthProviderContext } from "./UserContext";

export function AuthProvider ( {children} ) {
   const [userTrigger, setUserTrigger] = useState(false)
    const [user, setUser] = useState(
    {
        accessToken: null, 
        userID: null, 
        userName: null
    }
    
)

    
     
    function login ( item ) {
    if (item.access_token) {
        setUser(
        {accessToken: item.access_token,
        userID: item.user_id,
        userName: item.username}
    )  
        localStorage.setItem('access_token', item.access_token)
        localStorage.setItem('user_id', item.user_id)
        localStorage.setItem('username', item.username)    
    } else {
        null
    }
}

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const user_id = localStorage.getItem('user_id')
        const username = localStorage.getItem('username')
        const item = {access_token, user_id, username} 
        login(item)
        setUser(
        {accessToken: access_token,
        userID: user_id,
        userName: username}
        )  
        setUserTrigger(true)
    }, [])

    function trigger () {
        if (userTrigger) {
            return userTrigger
        } else {
            return null
        }
    }

    return (
        <AuthProviderContext.Provider value={ {user, login, trigger} }>
            {children}
        </AuthProviderContext.Provider>
    )
}