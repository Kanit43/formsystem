import React, { useState } from 'react'
import { redirect } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useForm } from "react-hook-form";

const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredential)
      setCurrentUser(userCredential.user);
    } catch (error) {
      console.log(error)
    }
  }

  // const handleSubmit = async (e) => {

  //   e.preventDefault();
  //   const { email, password } = e.target.element;

  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
  //     console.log(userCredential)
  //     setcurrentUser(userCredential.user);
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  if (currentUser) {
    return redirect("/dashboard/")
  }

  return (
    <div className='card'>
      <div className='card-body'>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="regisEmail" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="regisEmail" {...register("email")} />
        </div>

        <div className="mb-3">
          <label htmlFor="regisPassword" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="regisPassword" {...register("password")} />
        </div>

        <button type='submit' className="btn btn-primary">Submit</button>
      </form></div>
    </div>
  )
}

export default Signup;