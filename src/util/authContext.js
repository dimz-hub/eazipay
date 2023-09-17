import React , {useState, useContext, createContext, useEffect} from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

const AuthContext = createContext()




export function AuthContextProvider ({children}) {

        const [currentUser,setCurrentUser] = useState(null)
useEffect(() => {
const unsub = onAuthStateChanged(auth, (user) => {
     setCurrentUser(user)
      });

      return () => {
        unsub()
      }
      
}, [])
    

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => useContext(AuthContext)