import React, { useEffect, useState } from "react";
import Account from "./components/form/Account";

function App() {
  const [backend, setBackend] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackend(data);
      });
  }, []);
  return (
    <div className="App">
      {typeof backend.users === "undefined" ? (
        <p>loading...</p>
      ) : (
        backend.users.map((user, i) => {
          <p key={i}>{user}</p>;
        })
      )}
      <Account />
    </div>
  );
}

export default App;
