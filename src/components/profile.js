import { sendPasswordResetEmail } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Form, Row, Button, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../firebase";



const Profile = () => {
  const { user, info, getInfo } = useContext(AuthContext)
  const { register, handleSubmit, setValue, formState: { isDirty, isSubmitted, isValid,}, reset } = useForm()
  const [ onEdit, setOnEdit ] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
  }, [])

  const onSubmit = async (data) => {
    if (isSubmitted && !isValid) return;
    try {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        firstName: data.firstName,
        lastName: data.lastName || ""
      })
      reset()
      clickCancel()
      getInfo()
    }
    catch (e) {
      console.log(e)
      clickCancel()
    }
  }

  const resetPass = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email)
      handleShow()
    }
    catch(e) {
      console.log(e);
    }
  }

  const setForm = () => {
    setValue("firstName", info.firstName)
    setValue("lastName", info.lastName)
  }

  const clickCancel = () => {
    if (onEdit) setOnEdit(false)
  }

  const clickEdit = () => {
    setForm()
    setOnEdit(true)
  }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
      <div className="h4 mt-3">ข้อมูลผู้ใช้งาน</div>
      {!onEdit && <Button type="button" className="d-flex" variant="secondary" size="sm" onClick={() => clickEdit()}>
                    แก้ไข
                  </Button>}
      </div>
      <hr className="mt-1 mb-3"></hr>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-3">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">ชื่อ</Form.Label>
                      {onEdit ? <Form.Control type="text" {...register("firstName", { required: true })}></Form.Control>
                      : <div>{info.firstName}</div>}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">นามสกุล</Form.Label>
                      {onEdit ? <Form.Control type="text" {...register("lastName")}></Form.Control>
                      :<div>{info.lastName || <>&ndash;</>}</div>}
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label className="fw-bold">อีเมล์</Form.Label>
                      <div>{user.email}</div>
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label className="fw-bold">รหัสผ่าน</Form.Label>
                      <Button type="button" className="d-flex" variant="danger" size="sm" onClick={() => resetPass()}>
                        รีเซ็ตพาสเวิร์ค
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
               {onEdit && <div className="d-flex flex-row">
                  <Button type="button" className="d-flex ms-auto my-3" variant="secondary" size="sm" onClick={() => clickCancel()}>
                    ยกเลิก
                  </Button>
                  <Button type="submit" className="d-flex ms-2 my-3" disabled={!isDirty} variant="primary" size="sm">
                    {"บันทึก"}
                  </Button>
                </div>}
              </Form>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>รีเซ็ตพาสเวิร์ค</Modal.Title>
        </Modal.Header>
        <Modal.Body>ได้ทำการส่งอีเมล์สำหรับรีเซ็ตพาสเวิร์คไปที่ {user.email} เรียบร้อย</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
  );
};

export default Profile;