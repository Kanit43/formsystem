import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in/lib/FadeIn";
import * as loadingData from "../loading.json";
import { Alert } from "react-bootstrap";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Login = () => {
  const { user, loading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  let location = useLocation();
  let navigate = useNavigate();
  const [error, setError] = useState(false);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      setError(false);
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log(user);
      navigate(from, { replace: true });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  if (loading) {
    console.log("loading");
    return (
      <FadeIn>
        <Lottie options={defaultOptions} height={400} width={400} />
      </FadeIn>
    );
  }

  return (
    <div className="row mt-5">
      <div className="col-sm-8 col-md-5 mx-auto">
        <div className="card">
          <div className="card-body">
            <img src="/rmuti.png" className="img-fluid" height={40} width={50}></img>
            <img src="/sad2.png" className="img-fluid" height={100} width={80}></img>
            <img src="/pt.jpg" className="img-fluid" height={100} width={80}></img>
            <br></br>
            <span className="h5 text-success"> คณะเกษตรศาสตร์และเทคโนโลยี</span>
            <br></br>
            <span className="h5 text-warning "> มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน ,วิทยาเขตสุรินทร์</span>
            
            <br></br>
            <br></br>
            <img src="/3.png" className="img-fluid"></img>

            <span className="h4 text-primary">&gt;&gt;ระบบบริหารจัดการแบบฟอร์มคำร้องออนไลน์ (e-form)&lt;&lt;</span>
            <br></br>
            <br></br>

            <div className="col-lg-4"></div>
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
              {error && (
                <div className="alert alert-warning" role="alert">
                  Email or password wrong.
                </div>
              )}
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
