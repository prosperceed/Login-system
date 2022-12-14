import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth(app);

  useEffect(() => {
    const signed = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return signed;
  }, []);

  const value = { currentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
