import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { useForm } from "react-hook-form";
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { register, handleSubmit } = useForm();
  const location = useLocation()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        studentId: data.studentId,
        role: 1
      })
      setCurrentUser(userCredential.user);
    } catch (error) {
      console.log(error)
    }
  }

  if (currentUser) {
    return <Navigate to="/" state={{ from: location }} replace />
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

        <div className="mb-3">
          <label htmlFor="regisStudentId" className="form-label">Student ID</label>
          <input type="text" name="studentId" className="form-control" id="regisStudentId" {...register("studentId")} />
        </div>

        <button type='submit' className="btn btn-primary">Submit</button>
      </form></div>
    </div>
  )
}

export default Signup;