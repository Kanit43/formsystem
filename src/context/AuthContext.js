import React, { createContext, useState } from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { role } from "../constants"; 
import { userInfoConverter } from "../models/user-info";
import { signOut } from "firebase/auth";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const [roleUser, setRoleUser] = useState(null);
    // let roleUser = { isOffice : false, isAdmin: false }

    const getUserInfo = async () => {
        const docSnap = await getDoc(
          doc(db, "users", user.uid).withConverter(userInfoConverter)
        );
        if (docSnap.exists()) {
          const userInfo = docSnap.data();
          let isOffice = (userInfo.role & role.office) === role.office;
          let isAdmin = (userInfo.role & role.admin) === role.admin;
          setRoleUser({ isOffice: isOffice, isAdmin: isAdmin });
        }
    };

    console.log("provide")
    if (user && !roleUser) {
        console.log(user)
        getUserInfo()
    } 
    else if (!user && roleUser) {
        setRoleUser(null)
    }

    return (
        <AuthContext.Provider value={{user: user, roleUser: roleUser, loading: loading}}>
            {children}
        </AuthContext.Provider>
    )
}