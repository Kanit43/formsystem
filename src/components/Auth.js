import React, { useState,useEffect } from 'react'
import firebaseConfig from '../firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({children})=>{
    const[loading,setLoading]=useState(true);
    const [currentUser,setcurrentUser]=useState(null);

    useEffect(()=>{
        firebaseConfig.auth().onAuthStateChanged((user)=>{
        setcurrentUser(user);
        setLoading(false);
        })
    },[])

    if(loading){
        return<p> Loading...</p>;
    }
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>


}