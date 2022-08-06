import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext({})

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState({})

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const singIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      console.log(user)
      setUser(currentUser);
    })
  }, [])

  return (
    <UserContext.Provider value={{ createUser, user, logout, singIn }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {

  return useContext(UserContext)
}
