import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [authUser, setAuthUser] = useState(null);

    const authLogin = (user) => {
        setAuthUser(user)
    }

    const authRegister = (user) => {
        setAuthUser(user)
    }



    return <AuthContext.Provider value={{authUser, authLogin, authRegister}}>
        {children}
        </AuthContext.Provider>

}