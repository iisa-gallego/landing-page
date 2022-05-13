import { auth } from "../functions/app";

const newUser = {
    name,
    email,
    password
  }
  
  const createUserForm = document.getElementById("createUserForm");
  createUserForm.addEventListener("submit", e =>{
    e.preventDefault();
  
    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;
  });
  
  
  createUserForm.addEventListener("submit", e=> {
    e.preventDefault
    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;
    
    createUser(auth, name, email,password);
  
  });
  const loginForm = document.getElementById("loginForm");
  
  loginForm.addEventListener("submit", e =>{
    e.preventDefault
  
    const email = loginForm.email.value;
    const password = loginForm.password.value;
  
    loginForm(auth, email,password);
  })
  