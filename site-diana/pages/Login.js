import Head from 'next/head'
import Image from 'next/image'
import React, {useRef, useState, useContext} from "react";
import {AuthProvider, useAuth} from '../contexts/AuthContext'
import { useRouter } from 'next/router'
// import { LockClosedIcon } from '@heroicons/react/solid'

import {auth} from '../firebase';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = useContext(AuthProvider);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      login('1', '5');
      console.log("io")
      // signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      //   console.log(user);
      //   router.push('/dashboard');
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   alert(errorMessage);
      //   setLoading(false);
      // });
      // await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Falha ao logar!");
      setLoading(false);
    }

  }

  return (
    <>
    <AuthProvider>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto"
              src="/images/websitelogo.jpeg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold"
                style={{color:'#6e7074'}}
            >Entre na sua Conta</h2>
          {/* {JSON.stringify(user)} */}
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Endereço de email
                </label>
                <input
                  ref={emailRef}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Endereço de email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" style={{color:"#6e7074"}} className="ml-2 block text-sm font-extrabold">
                  Permanecer conectado
                </label>
              </div>

              <div className="text-sm">
                <a href="#" style={{color:"#6e7074"}} className="font-medium hover:text-indigo-500 font-extrabold">
                  Esqueceu a sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
              disabled={loading}
                type="submit"
                style={{backgroundColor:"#6e7074"}}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthProvider>
    </>
  )
}