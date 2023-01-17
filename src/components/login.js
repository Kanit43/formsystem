import React from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let location = useLocation()
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user
      console.log(user)
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='card'>
      <div className='card-body'>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="loginEmail" {...register("email")} />
        </div>

        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="loginPassword" {...register("password")} />
        </div>

        <button type='submit' className="btn btn-primary">Login</button>
      </form></div>
    </div>
  );
};

export default Login;
