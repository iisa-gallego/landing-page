import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../functions/app";

async function createUser(auth, name, email, password){
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      alert("Welcome! ${user.email}")
    }catch(e){
        if(e.code === "auth/weak-password"){
        alert("Your password must have at least 6 characters")
        
        }
  
        if(e.code === "auth/email-already-in-use"){
        alert("This email is already in use")
        
        }
    }
}

  async function loginForm(auth, email, password, rol){
      try {
          const { user } = signInWithEmailAndPassword(auth, email, password);
          alert("Welcome user, ${user.email}" )
        }catch (e) {
          alert("Email or Password isn't registered")
          
         }
    }

  export{
      createUser,
      login

        }

        //-------------------------

       

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
  