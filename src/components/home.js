import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'

const Home = () => {
    const currentUser = useContext(AuthContext);

    return (
        <>
            <h1>Home</h1>
            {currentUser ? (
                <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
            ) : (
                <p>
                    <Link to="/login">Log IN</Link> or<Link to="/signup"> Sign up</Link>
                </p>
            )}
        </>
    )
}

export default Home;