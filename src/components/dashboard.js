import React, { useContext } from 'react'
import { Navigate, useLocation,Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';


const Dashboard = () => {
    const currentUser = useContext(AuthContext);
    const location = useLocation()

    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return (
        <div>
            <div className="container mt-5"></div>
            <h1>Welcome</h1>
            <p>this is the dashboard, if you can see this you're logged in.</p>
            <div><Link to="/profile">Profile</Link> </div>
            <p>
                    <Link to="/post">post</Link> 
                </p>
            <button onClick={() => signOut(auth)} className="btn btn-danger">Sign out</button>
        </div>
    )
}

export default Dashboard;