import React, { userContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";

const LogIn = () => {
  const handleSubmit = (e) => {e.preventDefault();

  const { email, password } = e.target.element;

  try {
    firebaseConfig
      .auth()
      .signInwithEmailAndPassword(email.value, password.value);
  } catch (error) {
    alert(error);
  }}

  const { currentUser } = userContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard/" />;
  }

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LogIn;
