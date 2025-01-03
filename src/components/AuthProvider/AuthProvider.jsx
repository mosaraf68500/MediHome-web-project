import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase.init";


export const AuthContext = createContext(null); // Corrected typo in context name

const AuthProvider = ({ children }) => {

    const[user, setUser]=useState(null);

// create user or registetion page

const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

// signIN user or login user

const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

// onstatechange
onAuthStateChanged(auth,currentUser=>{
    if(currentUser){
        console.log("currently logged user", currentUser)
        setUser(currentUser)
    }
    else{
        console.log('no user logged in')
        setUser(null)
    }
})

const name='ami tmi';
  const AuthInfo = {
    name,
    createUser,
    signInUser,
    user
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
