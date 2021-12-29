import { createContext, useContext, useEffect, useState } from "react";
// import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

// import { recoverUserInformation, signInRequest } from "../services/auth";
// import { api } from "../services/api";

// api do firebase
import {auth} from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  // isAuthenticated: boolean;
  user: User;
  signup: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function signup({email, password}) {
    console.log('o povo do ghetto');
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const value = {
    user,
    signup
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(usuario => {
      setUser(usuario);
    });
    return unsubscribe;
  }, []);


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}