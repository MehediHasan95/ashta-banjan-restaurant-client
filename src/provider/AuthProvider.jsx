import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebaseSetup";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ uid: result.uid }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("access-token", res.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }

      setUser(result);
    });
    return () => unsubscribe();
  }, []);

  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userProfileUpdate = (displayName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName });
  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () =>
    signInWithPopup(auth, new GoogleAuthProvider());

  const userSignOut = () => signOut(auth);

  const dest = {
    user,
    loading,
    userSignUp,
    userSignIn,
    userProfileUpdate,
    signInWithGoogle,
    userSignOut,
  };
  return <AuthContext.Provider value={dest}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
