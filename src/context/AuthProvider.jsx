import { useState } from "react";
import { AuthProviderContext } from "./UserContext";

export function AuthProvider ( {children} ) {
    const [user, setUser] = useState(
    {
        accessToken: null, 
        userID: null, 
        userName: null
    }
)
     
    function login ( item ) {
        setUser({accessToken: item.access_token,
            userID: item.user_id,
            userName: item.username
    })
        

    }

    return (
        <AuthProviderContext.Provider value={ {user, login} }>
            {children}
        </AuthProviderContext.Provider>
    )
}