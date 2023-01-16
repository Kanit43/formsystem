import React,{userContext}from'react'
import {Redirect}from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../firebase'

const dashboard = () =>{
    const {currentUser} = userContext(AuthContext);

    if(!currentUser){
        return <Redirect to="/login"/>;
    }

    return(
        <div>
         <div className="container mt-5"></div>
         <h1>Welcome</h1>
         <p>this is the dashboard, if you can see this you're logged in.</p>
         <button onClick={()=> firebaseConfig.auth().signOut()}class="btn btn-danger">Sign out</button>
        </div>
    )
}

export default dashboard;