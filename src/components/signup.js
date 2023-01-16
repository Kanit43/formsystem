import React,{useState}from 'react'
import {redirect} from 'react-router-dom'
import firebaseConfig from '../firebase'

const Signup=()=>{
    const[currentUser,setcurrentUser]= useState(null);
   
   const handleSubmit = (e)=>{

    e.preventDefault();
    const {email,password}= e.target.element;

    try{

        firebaseConfig.auth().creatUserWithemailandPassword(email.value, password.value);
        setcurrentUser(true);

    }catch(error){
        alert(error);
    }

   }
   
   if(currentUser){
    return redirect("/dashboard/")
   }
   
   return (
    <>
    <h1>Sign up</h1>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
    )
    
}

export default Signup;