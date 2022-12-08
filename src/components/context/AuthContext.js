import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function Authprovider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
