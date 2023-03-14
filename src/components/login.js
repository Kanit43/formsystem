import React, { useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/PrivatedRoute";

const Login = () => {
  const { register, handleSubmit } = useForm(); 
  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log(user);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-sm-8 col-md-5 mx-auto">
        <div className="card">
          <div className="card-body">
            <span className="h6 text-primary">E-Form</span>
            <h4>Log in to e-form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">
                  Email address
                </label>
                <input type="email" name="email" className="form-control" id="loginEmail" {...register("email")} />
              </div>

              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
                <input type="password" name="password" className="form-control" id="loginPassword" {...register("password")} />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="d-flex justify-content-center my-3 small">
              Don't have an account?{" "}
              <Link className="ms-2" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
