import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out user
  const signOutUser = () => {
    setLoading(true); 
    signOut(auth);
  };

  // update password
  const updatePassword = (email) => {
    setLoading(true); 
    return sendPasswordResetEmail(auth, email);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider)
  }

  //   manage user
  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (createUser) => {
      // console.log("User created Successfully", createUser);
      setLoading(false); 
      setUser(createUser);
    });
    return () => {
      onSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    loginUser,
    signOutUser,
    updatePassword,
    loading,
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
