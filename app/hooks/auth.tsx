"use client"
import axios from "axios";
import * as React from 'react'
import {CookieAuthType} from "@/app/types/CookieType";

interface AuthContextType
{
    auth? : CookieAuthType,
    signIn: (email:string,password:string) => Promise<void>,
    signOut : () =>  Promise<void>,
    isLoading : boolean
}


const AuthContext = React.createContext<AuthContextType >({} as AuthContextType);



const AuthProvider : React.FC<React.PropsWithChildren<unknown>> = ({children}) =>
{
    const [auth,setAuth] = React.useState<CookieAuthType | undefined>();
    const [isLoading,setIsLoading] =  React.useState(true);
    const [userToken,setUserToken]=React.useState<string | undefined>();
    //X TODO CHANGE LOGIN AUTH LOGOUT
    React.useEffect(() => {
        const tryGetAuth = async () => {
            const res = await axios.post("http://localhost:8080/api/v1/users/authenticate");
            if(res.status == 200)
            {
                const token=res.data.token;
                console.log("teo "+token)
                const restCookie = res.data as CookieAuthType;
                setAuth(restCookie);
                setUserToken(token);
            }
        }

        tryGetAuth()
            .then(() => {
                console.log("Authed Successfully");
            })
            .finally(() => {
                setIsLoading(false);
            })
    },[])

    const signIn = async (email:string,password:string) => {
        const reqData = {email,password};
        const res = await axios.post("http://localhost:8080/api/v1/users/authenticate",reqData);
        if(res.status == 200)
        {
            setAuth(res.data as CookieAuthType);
            console.log(res.data.token)
        }
        else
        {
            throw "Can Login";
        }
    }

    const signOut = async () => {
        const res = await axios.post("http://localhost:8080/api/v1/users/logout");
        if(res.status == 200)
        {
            setAuth(undefined);
        }
        else
        {
            throw "Cant Logout";
        }
    }

    if(isLoading)
    {
        return (
            <AuthContext.Provider value={{auth,signIn,signOut,isLoading}}>

            </AuthContext.Provider>
        )
    }
    return(
        <AuthContext.Provider value={{auth,signIn,signOut,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;