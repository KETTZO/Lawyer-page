import React, { createContext, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    useEffect(()=>{
        if(storedData){ 
            try {
                const {userToken, user} = storedData;
                const decodedToken = jwtDecode(userToken);
                if (decodedToken.exp * 1000 < Date.now()) { // Multiplica por 1000 para convertir a milisegundos
                  logout();
                }
                else{
                    setToken(userToken);
                    setUserData(user);
                    setisAuthenticated(true);
                    console.log('auth:' + isAuthenticated)
                }
              } catch (error) {
                logout();
              }
        }
    },[]);

    const login = (newToken, newData) => {
        localStorage.setItem(
            'user_data',
            JSON.stringify({ userToken: newToken, user: newData}),
        );

        setToken(newToken);
        setUserData(newData);
        setisAuthenticated(true);
    };

    const logout = () =>{
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setisAuthenticated(false);
    };

    return (
        <AuthContext.Provider 
        //value={[token, isAuthenticated, login, logout, userData]}
        value={{token, userData, isAuthenticated, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
  
}

export const useAuth = () => useContext(AuthContext);