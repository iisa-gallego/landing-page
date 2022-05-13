// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { createUse, login } from "../scripts/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzKD26uuUu-ei0iiYiNipJx8NROr4Tn0w",
  authDomain: "tienda-virtual-web.firebaseapp.com",
  projectId: "tienda-virtual-web",
  storageBucket: "tienda-virtual-web.appspot.com",
  messagingSenderId: "551807753643",
  appId: "1:551807753643:web:f5d491d2acd76672af06ee",
  measurementId: "G-FQH8STRW2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);