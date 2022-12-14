import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import app from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import "./profile.css";

const Profile = () => {
  const { currentUser } = useAuth;

  const navigate = useNavigate();
  const auth = getAuth(app);

  const signOut = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("logged out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert(error.code);
      });
  };

  useEffect(() => {
    if (currentUser) {
      navigate("profile");
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <div className="profileTop">
        <button onClick={signOut} className="signoutBtn">
          Logout
        </button>
      </div>
      <h3 className="welcomeTxt">Welcome back!!</h3>
      <div className="dashCard">
        <div className="div">
          <div className="dashContent">
            <h3>Your profile</h3>
            <p className="name">
              Name: <small className="nameText">coming soon!</small>
            </p>
            <p className="email">
              Email:{" "}
              <small className="nameText">
                {currentUser && currentUser.email}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
