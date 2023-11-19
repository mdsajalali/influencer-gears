import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const signOutUser = () => {
    signOut(auth);
  };

  //   manage user
  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log("User created Successfully", createUser);
      setUser(createUser);
    });
    return () => {
      onSubscribe();
    };
  }, []);

  const userInfo = { user, createUser, loginUser, signOutUser };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
