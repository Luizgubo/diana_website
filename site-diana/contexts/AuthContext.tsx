import React, { createContext, useContext, useEffect, useState } from "react";
// import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

// import { recoverUserInformation, signInRequest } from "../services/auth";
// import { api } from "../services/api";

// api do firebase
import {auth} from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type SignInData = {
  email: string;
  password: string;
}
// type AuthContextType = {
//   // isAuthenticated: boolean;
//   user: User;
//   signup: (data: SignInData) => Promise<void>
// }


const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(a,b) {
    console.log(a);
    console.log(b);
    return true;
  }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const valor = {
    login,
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
    <AuthContext.Provider value={valor}>
      {children}
    </AuthContext.Provider>
  )
}