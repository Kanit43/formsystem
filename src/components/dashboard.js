import React, { userContext } from 'react'
import { redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import { signOut, getAuth } from "firebase/auth";

const dashboard = () => {
    const auth = getAuth()
    const { currentUser } = userContext(AuthContext);

    if (!currentUser) {
        return redirect("/login");
    }

    return (
        <div>
            <div className="container mt-5"></div>
            <h1>Welcome</h1>
            <p>this is the dashboard, if you can see this you're logged in.</p>
            <button onClick={() => signOut(auth)} class="btn btn-danger">Sign out</button>
        </div>
    )
}

export default dashboard;