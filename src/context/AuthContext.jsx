import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function UserAuth() {
  return useContext(AuthContext);
}
