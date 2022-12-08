import React, { useState } from "react";
import "./account.css";

const Account = () => {
  const [userSwitch, setUserSwitch] = useState();

  return (
    <div className="userForm">
      <form className="form">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>

        <div className="formGroup">
          <label htmlFor="passwordConfirm">Comfirm password</label>
          <input type="password" />
        </div>
        <div className="btn">
          <button className="submitBtn">Submit</button>
        </div>
        <div className="options">
          <p>
            Already registered? <a>Login</a>
          </p>
        </div>
        <div className="error">
          <p className="errorMsg">This is where error shows</p>
        </div>
      </form>
    </div>
  );
};

export default Account;
