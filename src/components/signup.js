import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { useForm } from "react-hook-form";
import { doc, setDoc } from 'firebase/firestore';
import { Container } from 'react-bootstrap';

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
        firstName: data.firstName,
        lastName: data.lastName,
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
    <Container>
    <div className='card my-5'>
      <div className='card-body'>
      <h2>สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="regisEmail" className="form-label">อีเมล์</label>
          <input type="email" name="email" className="form-control" id="regisEmail" {...register("email")} />
        </div>

        <div className="mb-3">
          <label htmlFor="regisPassword" className="form-label">รหัสผ่าน</label>
          <input type="password" name="password" className="form-control" id="regisPassword" {...register("password")} />
        </div>

        <div className="mb-3">
          <label htmlFor="regisStudentId" className="form-label">ชื่อ</label>
          <input type="text" name="studentId" className="form-control" id="regisStudentId" {...register("firstName")} />
        </div>

        <div className="mb-3">
          <label htmlFor="regisStudentId" className="form-label">นามสกุล</label>
          <input type="text" name="studentId" className="form-control" id="regisStudentId" {...register("lastName")} />
        </div>

        <div className="mb-3">
          <label htmlFor="regisStudentId" className="form-label">รหัสนักศึกษา</label>
          <input type="text" name="studentId" className="form-control" id="regisStudentId" {...register("studentId")} />
        </div>

        <button type='submit' className="btn btn-primary d-flex ms-auto">ยืนยัน</button>
      </form></div>
    </div>
    </Container>
  )
}

export default Signup;