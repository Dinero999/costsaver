import React, { useContext, useEffect, useState,createContext } from 'react'
import { auth,sendPasswordResetEmail,db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';



const AuthContext = React.createContext();

export const AccountContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export const AccountProvider = ({ children }) => {
  const [initialBalance, setInitialBalance] = useState(1000); // example initial balance
  const [commission, setCommission] = useState(50);
  const [tax, setTax] = useState(10) // example initial commission
  const [userId, setUserId] = useState(null); // Add userId state

  const setUser = (id, balance) => {
    setUserId(id);
    setInitialBalance(balance);
  };
  

  return (
    <AccountContext.Provider value={{ initialBalance, setInitialBalance, commission, setCommission, tax, setTax,userId, setUser  }}>
      {children}
    </AccountContext.Provider>
  );
};


export  function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading] = useState(true)

    async function signup(email, password) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid), {
          email: email,
          password: password, // Storing plaintext passwords is not recommended. Use secure hashing.
        });
        return userCredential;
      }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
      }

    function logout(){
        return signOut(auth);
    }


    
   
    
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user);
        setLoading(false);
    })

    return unsubscribe

},[])

const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  function updateEmail(email){
    return currentUser.updateEmail(email)
  }
    
  function updatePassword(password){
     return currentUser.updatePassword(password)
  }


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword


    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
