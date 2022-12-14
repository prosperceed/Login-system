import React, { useEffect, useState } from "react";
import { AuthProvider } from "./components/context/AuthContext";
import Account from "./components/form/Account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/dashboard/Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Account />
          <Routes>
            <Route path="/profile" component={Profile}></Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
