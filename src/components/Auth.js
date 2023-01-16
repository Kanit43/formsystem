import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setcurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <p> Loading...</p>;
    }

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}