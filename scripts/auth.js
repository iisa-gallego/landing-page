import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../functions/app";

async function createUser(auth, name, email, password) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = "./shop.html";
  } catch (e) {
    console.log(e.code);
    if (e.code === "auth/weak-password") {
      alert("Your password must have at least 6 characters")
    }

    if (e.code === "auth/email-already-in-use") {
      alert("This email is already in use")
    }
  }
}

async function login(email, password) {
  try {
    const { user } = signInWithEmailAndPassword(auth, email, password);
    alert(`Welcome user, ${user.email}`);
  } catch (e) {
    alert("Email or Password isn't registered")
  }
}


const createUserForm = document.getElementById("createUserForm");

if (createUserForm) {
  createUserForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;
  
    createUser(auth, name, email, password);
  
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
  
    const email = loginForm.email.value;
    const password = loginForm.password.value;
  
    login(email, password);
  });
}
