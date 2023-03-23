import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { useFormStore } from "../../store";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

const FormControl = () => {
  const form = useFormStore((state) => state.form);
  const fetch = useFormStore((state) => state.fetch);
  const updateStatus = useFormStore((state) => state.updateStatus);
  const { roleUser } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors, isSubmitted, isValid }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data)
      if (isSubmitted && !isValid) return
      let entity = {
        name: data.name,
        json: "",
        form: "",
        active: true,
        code: data.code,
      }
      if (data.form.length > 0) {
        const formFile = data.form[0]
        const formRef = ref(storage, `forms/${data.name}.pdf`)
        const uploadFormRes = await uploadBytes(formRef, formFile)
        entity.form = uploadFormRes.ref.fullPath
      }
      if (data.json.length > 0) {
        const jsonFile = data.json[0]
        const jsonRef = ref(storage, `jsons/${data.name}.json`)
        const uploadjsonRes = await uploadBytes(jsonRef, jsonFile)
        entity.json = uploadjsonRes.ref.fullPath
      }
      const formDocRef = doc(collection(db, "forms"))
      console.log(entity)
      await setDoc(formDocRef, entity)
      reset()
      fetch();
    } catch (error) {
      console.log(error);
    }
  };

  console.log("FormControl: render");
  useEffect(() => {
    fetch();
  }, []);

  const handleToggle = (id, status) => {
    updateStatus(id, status);
    fetch();
  };

  const deleteForm = async (id) => {
    await deleteDoc(doc(db, "forms", id))
    fetch()
  }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <div className="h4 my-3">จัดการฟอร์ม</div>
        
      </div>
      <div className="h6">เพิ่มฟอร์ม</div>
      <Card>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row className="g-2">
              <Col sm={6}>
                <Form.Group>
                    <Form.Label>ชื่อฟอร์ม</Form.Label>
                    <Form.Control type="text" {...register("name", {required: true})}></Form.Control>
                    {errors.name && <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>}
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                    <Form.Label>อัพโหลดไฟล์ฟอร์ม (.pdf เท่านั้น)</Form.Label>
                    <Form.Control type="file" {...register("form", {required: true})}></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                    <Form.Label>อัพโหลด json ฟอร์ม (สำหรับ admin) </Form.Label>
                    <Form.Control type="file" {...register("json")} disabled={!roleUser.isAdmin}></Form.Control>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                    <Form.Label>รหัสฟอร์ม (สำหรับ admin)</Form.Label>
                    <Form.Control type="text" {...register("code")} disabled={!roleUser.isAdmin}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className="d-flex ms-auto my-3" variant="primary" size="sm">
          เพิ่มฟอร์ม
        </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="h6 mt-3">รายการฟอร์ม</div>
      <Table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Code</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {form.map((v) => {
            console.log(v);
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.code}</td>
                <td>
                  <Form.Check
                    type="switch"
                    defaultChecked={v.active}
                    onClick={() => handleToggle(v.id, !v.active)}
                  />
                </td>
                <td><Button variant="danger" size="sm" onClick={() => deleteForm(v.id)}>ลบ</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormControl;
