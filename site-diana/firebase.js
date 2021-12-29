import * as firebase from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnKy4-vbgT8BiwYqy2T0xdQNtY6nSeWb8",
  authDomain: "sitediana-6e569.firebaseapp.com",
  projectId: "sitediana-6e569",
  storageBucket: "sitediana-6e569.appspot.com",
  messagingSenderId: "542248800904",
  appId: "1:542248800904:web:9b5e48d34eff2f13e0053d",
  measurementId: "G-HPQ5TJTN8R"
};

// Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app