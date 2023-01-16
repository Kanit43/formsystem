import React, { userContext } from "react";
import { redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.element;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const currentUser = userContext(AuthContext);
  
  if (currentUser) {
    return redirect("/dashboard/")
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

export default Login;
