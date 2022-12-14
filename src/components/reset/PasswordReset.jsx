import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase";

const PasswordReset = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const auth = getAuth(app);

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, emailRef.current.value);
      setSuccess("Password reset successfully! Check your email");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      alert("Reset successfully, check your mails including spam folder!");
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      setError(errorCode.substring(5));
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="userForm">
      <div className="form">
        <h3 className="formDesc">Reset Password</h3>
        <div className="formGroup">
          <label htmlFor="name">Email</label>
          <input ref={emailRef} type="text" required />
        </div>
        <button
          style={{ marginTop: "1rem" }}
          onClick={resetPassword}
          type="button"
          className="submitBtn"
        >
          Reset
        </button>
        {error && (
          <div className="error">
            <p className="errorMsg">{error}</p>
            <p className="successMsg">{success}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
