import React, { useContext, useState } from 'react'
import decode from 'jwt-decode';

const AuthContext = React.createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem('token-pass'));

    const storeToken = (jwtToken) => {
        localStorage.setItem('token-pass', jwtToken);
        setToken(jwtToken);
    }

    const getToken = () => {
        return localStorage.getItem('token-pass');
    }

    const hasAccess = () => {
        return token ? true : false;
    }

    const clearToken = () => {
        localStorage.clear('token-pass');
        setToken();
    }

    const getEmail = () => {
        if(token)
        {
            let decodedToken = decode(token);
            return decodedToken.email;
        }
    }

    const logout = () => {
        clearToken();
    }

    const value = {
        storeToken,
        clearToken,
        token,
        getToken,
        hasAccess,
        getEmail,
        logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}