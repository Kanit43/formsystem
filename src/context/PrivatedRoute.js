import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';

export const PrivatedRoute = () => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return "Loading..."
    }
        
    return user ? <Outlet /> : <Navigate to="/login" state={{ form: location }}></Navigate>
}