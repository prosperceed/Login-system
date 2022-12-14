import React, { useEffect, useState } from "react";
import { AuthProvider } from "./components/context/AuthContext";
import Account from "./components/form/Account";
import { BrowserRouter as router, route, routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Account />
      </div>
    </AuthProvider>
  );
}

export default App;
