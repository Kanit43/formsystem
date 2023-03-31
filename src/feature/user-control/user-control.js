import React, { useEffect, useState } from "react"
import { useUsersStore } from "../../store"
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";

const UserControl = () => {
    const users = useUsersStore(state => state.users)
    const fetchUsers = useUsersStore(state => state.fetch)
    const updateUser = useUsersStore(state => state.updateUser)
    const [onEdit, setOnEdit] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted, isValid, isDirty },
        reset,
        setValue,
      } = useForm();

    useEffect(() => {
        fetchUsers()
    }, [])

    const onSubmit = async (data) => {
        try {
            let entity = {
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role
            }
            await updateUser(onEdit.uid, entity)
        }
        catch (e) {
            console.log(e)
        }
        reset()
        clickCancel()
        fetchUsers()
    }

    const editForm = async (user) => {
        setOnEdit(user);
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("role", user.role);
    };

    const clickCancel = () => {
        if (onEdit) setOnEdit(null);
      };
    
    return <Container>
        <div className="h4 my-3">จัดการข้อมูลผู้ใช้</div>
        { onEdit &&
        <Card>
            <Card.Body>
              <Card.Title>แก้ไขข้อมูลผู้ใช้</Card.Title>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-2">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>ชื่อ</Form.Label>
                      <Form.Control type="text" {...register("firstName", { required: true })}></Form.Control>
                      {errors.name && <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>นามสกุล</Form.Label>
                      <Form.Control type="text" {...register("lastName")}></Form.Control>
                      {errors.name && <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>}
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label>ตำแหน่ง</Form.Label>
                      <Form.Control type="text" {...register("role", { required: true })}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex flex-row">
                  <Button type="button" className="d-flex ms-auto my-3" variant="secondary" size="sm" onClick={() => clickCancel()}>
                    ยกเลิก
                  </Button>
                  <Button type="submit" className="d-flex ms-2 my-3" disabled={!isDirty} variant="primary" size="sm">
                    บันทึก
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          }
           <Table>
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
            <th>Student Id</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v) => {
            return (
              <tr key={v.uid}>
                <td>{v.uid}</td>
                <td>{v.firstName} {v.lastName}</td>
                <td>{v.studentId || <>&ndash;</> }</td>
                <td>{v.role}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => editForm(v)}>
                    แก้ไข
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
}

export default UserControl