import React, { useState, useEffect, useRef } from "react";
import "./account.css";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

const Account = () => {
  const [userSwitch, setUserSwitch] = useState();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const nameRef = useRef();
  const auth = getAuth(app);

  const { currentUser } = useAuth();

  const [status, setStatus] = useState("typing");
  const [error, setError] = useState("");
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/profile");
  //   }
  // }, [navigate]);

  if (status === "success") {
    return (
      <div className="successMsg">
        <h1 className="success">
          Congrats, Account Successfully created. Please login
        </h1>
        <p className="successBtn">please refresh this tab to login</p>
      </div>
    );
  }

  const submitUser = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );

      updateProfile(auth.currentUser, {
        displayName: nameRef.current.value,
      })
        .then(() => {
          // Profile updated!
          // ...
          console.log(currentUser.displayName);
        })
        .catch((error) => {
          // An error occurred
          // ...
        });

      setStatus("success");
      // alert("user created!");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/weak-password") {
        setError("Your password is vulnerable");

        setTimeout(() => {
          setError("");
        }, 2200);
      } else {
        setError(errorCode.substring(5));
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/profile");
    } catch (error) {
      const errorCode = error.code;
      setError(errorCode.substring(5));
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleSwitch = () => {
    setUserSwitch(!userSwitch);
  };

  return (
    <div className="userForm">
      <div className="form">
        <h3 className="formDesc">User Authentication System</h3>
        <h3 className="switchBtn" onClick={handleSwitch}>
          {userSwitch ? "Register" : "Login"}
        </h3>
        <div className="formGroup">
          {!userSwitch ? (
            <></>
          ) : (
            <>
              <label htmlFor="name">Name</label>
              <input ref={nameRef} type="text" required />
            </>
          )}
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" required />
        </div>

        <div className="formGroup">
          {!userSwitch ? (
            <></>
          ) : (
            <>
              <label htmlFor="passwordConfirm">Confirm password</label>
              <input ref={confirmPasswordRef} type="password" required />
            </>
          )}
        </div>
        <div className="btn">
          <button
            onClick={userSwitch ? submitUser : loginUser}
            type="button"
            disabled={status === "submitting"}
            className="submitBtn"
          >
            {userSwitch ? "Submit" : "Login"}
          </button>
        </div>
        {!userSwitch ? <Link to="passwordReset">Reset password?</Link> : ""}
        {error && (
          <div className="error">
            <p className="errorMsg">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
