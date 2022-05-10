import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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