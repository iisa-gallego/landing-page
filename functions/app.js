// Import the functions you need from the SDKs you need
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
//import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth();

const createUserForm = document.getElementById("createUserForm");
createUserForm.addEventListener("submit", e =>{
  e.preventDefault();

  const name = createUserForm.name.value;
  const email = createUserForm.email.value;
  const password = createUserForm.password.value;
  createUser(name, email,password);
});

async function createUser(name, email, password){
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    alert('Welcome! ${user.email}')
  } catch(e){

    if(e.code === "auth/weak-password"){
      alert("Your password must have at least 6 characters")
      
    }

    if(e.code === "auth/email-already-in-use"){
      alert("This email is already in use")
      
    }

 
   }

}
