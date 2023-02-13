import React from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (error) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const formList = [];
  for (let i = 1; i <= 8; i++) {
    formList.push(
      <div key={"form" + i} className="col-sm-2">
        <Link className="btn btn-outline-primary" to={"/form/" + i}>
          Form{i}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-5"></div>
      <h1>Welcome {user.email}</h1>
      <p>this is the dashboard, if you can see this you're logged in.</p>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="row g-3 my-3">{formList}</div>
      <button onClick={() => signOut(auth)} className="btn btn-danger">
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
