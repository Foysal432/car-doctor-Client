import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase-confiq";

export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] =useState({})
const [loading, setLoading]=useState(true)

// create user email password
const createuser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}


// sing in with email psk
const singinemail = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
//  sing in with google
const googleAuth =new GoogleAuthProvider()

const Googlesingin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleAuth)
}
// sing in out
const logout = () =>{
    return signOut (auth)
}

  // onAuthChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
        setUser(currentuser)
        setLoading(false)
    })
    return () => {
        unSubscribe()
    }

}, [])

    const AuthInfo ={
        Googlesingin,
        user,
        logout,
        singinemail,
        createuser,
        loading


    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;