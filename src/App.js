import React, { useEffect, useState } from "react";
import { AuthProvider } from "./components/context/AuthContext";
import Account from "./components/form/Account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/dashboard/Profile";
import { useAuth } from "./components/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Account />}></Route>
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
