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

    const authLogout = () => {
        setAuthUser(null);
    }



    return <AuthContext.Provider value={{authUser, authLogin, authRegister, authLogout}}>
        {children}
        </AuthContext.Provider>

}